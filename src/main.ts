import './styles/main.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { createToothlessCharacterAsset } from './character/ToothlessAsset';
import { ToothlessFlightChoreographer } from './character/FlightChoreographer';
import { ToothlessRigController } from './character/ToothlessRigController';
import { createLightFuryCharacterAsset } from './character/lightfury/LightFuryAsset';
import { LightFuryRigController } from './character/lightfury/LightFuryRigController';
import { createNordicAtmosphere } from './world/NordicAtmosphere';
import {
  createNordicCliffWorld,
  LIGHT_FURY_PERCH_POSE,
  sampleWorldTerrainHeight,
  TOOTHLESS_PERCH_POSE,
} from './world/NordicCliffWorld';
import {
  CinematicLoveStoryController,
  createCinematicLoveStoryDirector,
} from './world/CinematicLoveStoryDirector';
import { createCelestialFireworksSystem } from './world/CelestialFireworksSystem';
import { createCourtshipSanctuaryProps } from './world/CourtshipSanctuaryProps';
import { createRenderQualityManager } from './world/RenderQualityManager';
import { createLoadingScreenController } from './ui/LoadingScreen';
import { CAMERA_BOOKMARKS, CameraBookmark, createRigStudioHUD } from './ui/RigStudioHUD';
import {
  checkSanctuarySealedOnBoot,
  executePermanentSanctuaryShutdown,
  fetchGlobalSanctuarySealed,
  persistSanctuarySeal,
} from './ui/SanctuaryGatekeeper';
import { createUserExperienceHUD, UserExperienceHUDController } from './ui/UserExperienceHUD';

type AppInterfaceMode = 'developer' | 'user';

function resolveAppMode(): AppInterfaceMode {
  const winMode = (window as unknown as { __TWIN_FURIES_MODE__?: string }).__TWIN_FURIES_MODE__;
  if (winMode === 'developer' || winMode === 'user') return winMode;
  const envMode = (import.meta as unknown as { env?: Record<string, string | undefined> }).env?.VITE_APP_MODE;
  if (envMode === 'developer' || envMode === 'user') return envMode;
  return 'developer';
}

async function bootstrap(): Promise<void> {
  const appMode = resolveAppMode();
  const isUserMode = appMode === 'user';
  document.title = 'Our World';

  if (isUserMode) {
    const isSealed = await checkSanctuarySealedOnBoot();
    if (isSealed) return;
  }

  const loadingScreen = createLoadingScreenController();
  const canvasContainer = document.getElementById('canvas-container')!;
  const hudRoot = document.getElementById('hud-root')!;

  await loadingScreen.advanceTo(14, 'Initializing HDR WebGL2 post-processing pipeline…');

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.14;
  canvasContainer.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    42,
    window.innerWidth / window.innerHeight,
    0.12,
    9500
  );
  let activeBookmark: CameraBookmark = CAMERA_BOOKMARKS[0];
  camera.position.copy(activeBookmark.position);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(activeBookmark.target);
  controls.enableDamping = true;
  controls.dampingFactor = isUserMode ? 0.052 : 0.065;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = isUserMode ? 0.68 : 0.78;
  controls.panSpeed = isUserMode ? 0.80 : 0.85;
  controls.zoomSpeed = isUserMode ? 0.86 : 0.92;
  controls.minDistance = 0.45;
  controls.maxDistance = 320.0;
  controls.maxPolarAngle = Math.PI * 0.56;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };
  controls.update();

  const renderTarget = new THREE.WebGLRenderTarget(
    window.innerWidth * renderer.getPixelRatio(),
    window.innerHeight * renderer.getPixelRatio(),
    {
      type: THREE.HalfFloatType,
      samples: 4,
    }
  );
  const composer = new EffectComposer(renderer, renderTarget);
  composer.addPass(new RenderPass(scene, camera));

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.26,
    0.52,
    1.04
  );
  // Sanitize HalfFloatType (RGBA16F) texels entering UnrealBloomPass so any subpixel FP16 overflow (>65504 -> Inf)
  // or driver NaN can NEVER propagate through the 5-mip separable X/Y blur into a transient black square!
  bloomPass.materialHighPassFilter.fragmentShader = /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec3 defaultColor;
    uniform float defaultOpacity;
    uniform float luminosityThreshold;
    uniform float smoothWidth;
    varying vec2 vUv;

    float safeFiniteChannel(float c) {
      // IEEE-754: NaN fails all comparisons; +Inf exceeds 65000.0
      if (!(c >= 0.0)) return 0.0;
      if (!(c <= 65000.0)) return 28.0;
      return min(c, 28.0);
    }

    void main() {
      vec4 rawTexel = texture2D(tDiffuse, vUv);
      vec3 safeRgb = vec3(
        safeFiniteChannel(rawTexel.r),
        safeFiniteChannel(rawTexel.g),
        safeFiniteChannel(rawTexel.b)
      );
      float safeA = (rawTexel.a >= 0.0 && rawTexel.a <= 1.0) ? rawTexel.a : 1.0;
      float v = dot(safeRgb, vec3(0.2126, 0.7152, 0.0722));
      float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
      gl_FragColor = vec4(mix(defaultColor.rgb, safeRgb, alpha), mix(defaultOpacity, safeA, alpha));
    }
  `;
  bloomPass.materialHighPassFilter.needsUpdate = true;
  composer.addPass(bloomPass);

  const outputPass = new OutputPass();
  // Guard ACESFilmicToneMapping against Inf/Inf = NaN -> black pixel if any HDR pixel ever exceeds FP16 range
  outputPass.material.fragmentShader = outputPass.material.fragmentShader.replace(
    'gl_FragColor = texture2D( tDiffuse, vUv );',
    `gl_FragColor = texture2D( tDiffuse, vUv );
     gl_FragColor.r = !(gl_FragColor.r >= 0.0) ? 0.0 : (!(gl_FragColor.r <= 65000.0) ? 32.0 : min(gl_FragColor.r, 32.0));
     gl_FragColor.g = !(gl_FragColor.g >= 0.0) ? 0.0 : (!(gl_FragColor.g <= 65000.0) ? 32.0 : min(gl_FragColor.g, 32.0));
     gl_FragColor.b = !(gl_FragColor.b >= 0.0) ? 0.0 : (!(gl_FragColor.b <= 65000.0) ? 32.0 : min(gl_FragColor.b, 32.0));
     gl_FragColor.a = 1.0;`
  );
  outputPass.material.needsUpdate = true;
  composer.addPass(outputPass);

  // 1. Build Photorealistic Nordic Atmosphere, Bathymetric Seafloor & Multi-Belt Archipelago
  await loadingScreen.advanceTo(34, 'Sculpting Nordic archipelago ridges, sea-arches & North Sea swells…');
  const initialWeatherPreset = 'golden-hour';
  const atmosphere = createNordicAtmosphere(renderer, scene, initialWeatherPreset);
  const cliffWorld = createNordicCliffWorld(atmosphere.sharedUniforms);
  scene.add(cliffWorld.group);

  // 2. Build Night Fury (Toothless)
  await loadingScreen.advanceTo(58, 'Forging Night Fury armor scutes, flush dorsal spines & 117-bone rig…');
  const toothlessAsset = createToothlessCharacterAsset();
  toothlessAsset.rootGroup.position.copy(TOOTHLESS_PERCH_POSE.position);
  toothlessAsset.rootGroup.rotation.set(0, TOOTHLESS_PERCH_POSE.yaw, 0);
  scene.add(toothlessAsset.rootGroup);
  toothlessAsset.rootGroup.updateMatrixWorld(true);
  const toothlessController = new ToothlessRigController(toothlessAsset);

  // 3. Build Light Fury
  await loadingScreen.advanceTo(82, 'Weaving Light Fury pearl luminescence, mirror cloak & 111-bone rig…');
  const lightFuryAsset = createLightFuryCharacterAsset();
  lightFuryAsset.rootGroup.position.copy(LIGHT_FURY_PERCH_POSE.position);
  lightFuryAsset.rootGroup.rotation.set(0, LIGHT_FURY_PERCH_POSE.yaw, 0);
  scene.add(lightFuryAsset.rootGroup);
  lightFuryAsset.rootGroup.updateMatrixWorld(true);
  const lightFuryController = new LightFuryRigController(lightFuryAsset);

  // 4. Synchronized Courtship Duet & Solo Flight Choreographer + 5-Stage Resolution Engine
  await loadingScreen.advanceTo(94);
  const qualityController = createRenderQualityManager(
    renderer,
    scene,
    composer,
    bloomPass,
    atmosphere.sunLight
  );
  const flightChoreographer = new ToothlessFlightChoreographer(
    toothlessAsset,
    toothlessController,
    lightFuryAsset,
    lightFuryController
  );

  let activeCamTransition: {
    goalPos: THREE.Vector3;
    goalTarget: THREE.Vector3;
  } | null = null;

  let flightSpeedMultiplier = 1.0;
  let cursorGazeEnabled = true;
  let snapshotPending = false;

  controls.addEventListener('start', () => {
    activeCamTransition = null;
  });

  let devHud: ReturnType<typeof createRigStudioHUD> | null = null;
  let userHud: UserExperienceHUDController | null = null;
  let storyDirector: CinematicLoveStoryController | null = null;
  let renderLoopHalted = false;
  let rafHandle = 0;
  const userExploreHomePos = new THREE.Vector3(0.05, 2.75, 11.40);
  const userExploreHomeTarget = new THREE.Vector3(0.0, 1.18, -0.45);

  if (isUserMode) {
    // Lock manual pan/zoom/rotate during the 2-minute love-story sequence
    controls.enabled = false;

    const sanctuaryProps = createCourtshipSanctuaryProps();
    scene.add(sanctuaryProps.group);

    const fireworksSystem = createCelestialFireworksSystem();
    scene.add(fireworksSystem.group);

    storyDirector = createCinematicLoveStoryDirector(
      renderer,
      scene,
      camera,
      atmosphere,
      cliffWorld.ocean,
      toothlessAsset,
      toothlessController,
      lightFuryAsset,
      lightFuryController,
      sanctuaryProps,
      fireworksSystem,
      {
        onReachConfessionPrompt() {
          userHud?.showConfessionPrompt();
        },
        onDeclineProgress(fade01) {
          userHud?.setDeclineEclipseProgress(fade01);
        },
        onDeclineComplete() {
          renderLoopHalted = true;
          if (rafHandle) cancelAnimationFrame(rafHandle);
          void executePermanentSanctuaryShutdown({
            stopRenderLoop: () => {
              renderLoopHalted = true;
              if (rafHandle) cancelAnimationFrame(rafHandle);
            },
            muteAudio: () => atmosphere.setAudioMuted(true),
            scene,
            renderer,
            composer,
          });
        },
        onReachMovieComplete() {
          userHud?.showCompletionInvitation();
        },
        onEnterFreeExplore(finalCamPos, finalCamTarget) {
          userExploreHomePos.copy(finalCamPos);
          userExploreHomeTarget.copy(finalCamTarget);
          camera.position.copy(finalCamPos);
          controls.target.copy(finalCamTarget);
          camera.fov = 42;
          camera.updateProjectionMatrix();
          controls.enabled = true;
          controls.update();
          userHud?.unlockFreeExploreHUD();
        },
      }
    );

    userHud = createUserExperienceHUD(hudRoot, {
      quality: qualityController,
      onCaptureSnapshot() {
        snapshotPending = true;
      },
      onResetView() {
        if (storyDirector?.isCameraLocked()) return;
        activeCamTransition = {
          goalPos: userExploreHomePos.clone(),
          goalTarget: userExploreHomeTarget.clone(),
        };
      },
      onToggleAudioMute() {
        const nextMuted = !atmosphere.isAudioMuted();
        atmosphere.setAudioMuted(nextMuted);
        return nextMuted;
      },
      onConfessionHoverBias(bias) {
        storyDirector?.setConfessionHoverBias(bias);
      },
      onConfessionChooseYes() {
        storyDirector?.chooseYes();
      },
      onConfessionChooseNo() {
        // Seal globally on Supabase immediately so even closing the tab cannot bypass the lock!
        void persistSanctuarySeal();
        storyDirector?.chooseNo();
      },
      onClickExploreWorld() {
        storyDirector?.enterFreeExplore();
      },
      onClickReplayStory() {
        activeCamTransition = null;
        roamVelocity.set(0, 0, 0);
        controls.enabled = false;
        storyDirector?.replayStory();
      },
    });

    // Live cross-visitor guard: if ANY visitor seals the site globally with "No", shut down open sessions too!
    const globalSealWatch = window.setInterval(async () => {
      if (renderLoopHalted) {
        window.clearInterval(globalSealWatch);
        return;
      }
      // Allow the active 12s farewell animation to finish naturally on the tab that clicked "No"
      const curMode = storyDirector?.getMode();
      if (curMode === 'declined-playing' || curMode === 'declined-finished') return;

      const remoteSealed = await fetchGlobalSanctuarySealed(2200);
      if (remoteSealed === true && !renderLoopHalted) {
        window.clearInterval(globalSealWatch);
        renderLoopHalted = true;
        if (rafHandle) cancelAnimationFrame(rafHandle);
        void executePermanentSanctuaryShutdown({
          stopRenderLoop: () => {
            renderLoopHalted = true;
            if (rafHandle) cancelAnimationFrame(rafHandle);
          },
          muteAudio: () => atmosphere.setAudioMuted(true),
          scene,
          renderer,
          composer,
        });
      }
    }, 8000);
  } else {
    devHud = createRigStudioHUD(
      hudRoot,
      toothlessAsset,
      toothlessController,
      lightFuryAsset,
      lightFuryController,
      flightChoreographer,
      {
        quality: qualityController,
        initialWeatherPreset,
        onSelectCameraBookmark(bm: CameraBookmark) {
          activeBookmark = bm;
          activeCamTransition = {
            goalPos: bm.position.clone(),
            goalTarget: bm.target.clone(),
          };
        },
        onFlightResetCamera() {
          activeCamTransition = {
            goalPos: activeBookmark.position.clone(),
            goalTarget: activeBookmark.target.clone(),
          };
        },
        onFlightSpeedChange(mult) {
          flightSpeedMultiplier = mult;
        },
        onToggleCursorGaze(enabled) {
          cursorGazeEnabled = enabled;
        },
        onCaptureSnapshot() {
          snapshotPending = true;
        },
        onSelectWeatherPreset(presetId) {
          atmosphere.applyPreset(presetId, renderer, scene);
        },
        onSunElevationChange(elevDeg) {
          atmosphere.setSunElevation(elevDeg, renderer, scene);
        },
        onMistDensityChange(mist) {
          atmosphere.setMistDensity(mist, scene);
        },
        onRainIntensityChange(rain) {
          atmosphere.setRainIntensity(rain);
        },
        onWindStrengthChange(wind) {
          atmosphere.setWindStrength(wind);
        },
        onLightningFrequencyChange(freq) {
          atmosphere.setLightningFrequency(freq);
        },
        onTriggerLightningStrike() {
          atmosphere.triggerLightningStrike();
        },
        onOceanParamsChange(patch) {
          cliffWorld.ocean.setOceanParams(patch);
        },
      }
    );
  }

  const showToastMsg = (msg: string) => {
    if (devHud) devHud.showToast(msg);
    else if (userHud) userHud.showToast(msg);
  };
  const triggerShutter = () => {
    if (devHud) devHud.triggerShutterFlash();
    else if (userHud) userHud.triggerShutterFlash();
  };

  // ============================================================================
  // INTERACTIVE WASD + Q/E + SHIFT FREE-ROAM CAMERA EXPLORER
  // ============================================================================
  const pressedKeys = new Set<string>();
  const roamVelocity = new THREE.Vector3();
  const roamForward = new THREE.Vector3();
  const roamRight = new THREE.Vector3();
  const roamDesired = new THREE.Vector3();

  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    pressedKeys.add(e.code);
  });
  window.addEventListener('keyup', (e) => {
    pressedKeys.delete(e.code);
  });
  window.addEventListener('blur', () => {
    pressedKeys.clear();
  });

  // ============================================================================
  // DOUBLE-CLICK SMART 3D RAYCAST FOCUS (Dragons, Cliffs, Sea-Arches & Islands)
  // ============================================================================
  const raycaster = new THREE.Raycaster();
  const ndcPointer = new THREE.Vector2();

  renderer.domElement.addEventListener('dblclick', (ev) => {
    if (storyDirector?.isCameraLocked()) return;
    if (flightChoreographer.isPlaying && !isUserMode) return;
    const rect = renderer.domElement.getBoundingClientRect();
    ndcPointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    ndcPointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(ndcPointer, camera);
    const focusCandidates: THREE.Object3D[] = [
      lightFuryAsset.rootGroup,
      toothlessAsset.rootGroup,
      cliffWorld.group,
    ];
    const hits = raycaster.intersectObjects(focusCandidates, true);
    const validHit = hits.find(
      (h) =>
        h.distance < 650 &&
        !(h.object instanceof THREE.Points) &&
        !h.object.userData?.excludeFromExport
    );
    if (!validHit) return;

    const hitPt = validHit.point.clone();
    let isDragonHit = false;
    let obj: THREE.Object3D | null = validHit.object;
    let focusName = 'Coastal Landform';
    while (obj) {
      if (obj === lightFuryAsset.rootGroup) {
        isDragonHit = true;
        focusName = 'Light Fury';
        break;
      }
      if (obj === toothlessAsset.rootGroup) {
        isDragonHit = true;
        focusName = 'Toothless';
        break;
      }
      if (obj.name.startsWith('FaroeseHeadlandSeaArch')) {
        focusName = 'Headland Sea-Arch';
        break;
      }
      if (obj.name === 'TabularFaroeseSeaStacks') {
        focusName = 'Tabular Sea-Stack';
        break;
      }
      if (obj.name === 'WestWaterfallDoubleIsland') {
        focusName = 'Waterfall Double-Island';
        break;
      }
      if (obj.name === 'StarboardCrescentLagoonAtoll') {
        focusName = 'Crescent Lagoon';
        break;
      }
      obj = obj.parent;
    }

    const viewDir = camera.position.clone().sub(hitPt).normalize();
    const currentDist = camera.position.distanceTo(hitPt);
    const idealDist = isDragonHit
      ? THREE.MathUtils.clamp(currentDist * 0.6, 2.6, 7.5)
      : THREE.MathUtils.clamp(currentDist * 0.55, 10.0, 68.0);
    const nextPos = hitPt.clone().addScaledVector(viewDir, idealDist);
    nextPos.y = Math.max(nextPos.y, sampleWorldTerrainHeight(nextPos.x, nextPos.z) + 1.2, -9.2);

    if (devHud) {
      devHud.clearActiveCameraBookmark();
    }
    activeCamTransition = {
      goalPos: nextPos,
      goalTarget: hitPt,
    };
    if (devHud) {
      devHud.showToast(`Focused on ${focusName}`);
    }
  });

  // ============================================================================
  // ORGANIC POINTER GAZE TRACKING (Curious Head & Eye Follow When Perched!)
  // ============================================================================
  const pointerNDC = new THREE.Vector2(0, 0);
  let lastPointerMoveTime = -10;
  let isPointerDragging = false;
  let smoothedGazeX = 0;
  let smoothedGazeY = 0;
  let smoothedGazeWeight = 0;

  window.addEventListener('pointerdown', (ev) => {
    if (ev.target === renderer.domElement) isPointerDragging = true;
  });
  window.addEventListener('pointerup', () => {
    isPointerDragging = false;
  });
  window.addEventListener('pointermove', (ev) => {
    if (isPointerDragging) return;
    pointerNDC.x = (ev.clientX / Math.max(1, window.innerWidth)) * 2 - 1;
    pointerNDC.y = -((ev.clientY / Math.max(1, window.innerHeight)) * 2 + 1);
    lastPointerMoveTime = performance.now() * 0.001;
  });

  const tHeadBone = toothlessAsset.rig.boneMap.get('head');
  const tNeckBone = toothlessAsset.rig.boneMap.get('neck_03');
  const tEyeLBone = toothlessAsset.rig.boneMap.get('eye_L');
  const tEyeRBone = toothlessAsset.rig.boneMap.get('eye_R');

  const lHeadBone = lightFuryAsset.rig.boneMap.get('head');
  const lNeckBone = lightFuryAsset.rig.boneMap.get('neck_03');
  const lEyeLBone = lightFuryAsset.rig.boneMap.get('eye_L');
  const lEyeRBone = lightFuryAsset.rig.boneMap.get('eye_R');

  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    qualityController.handleResize(w, h);
  });

  // Warm-up render behind the twilight curtain so the reveal is 60 FPS butter-smooth!
  if (storyDirector) {
    const warm = storyDirector.update(0.016);
    toothlessController.update(0.016);
    lightFuryController.update(0.016);
    storyDirector.applyBiomechanicalPostPass(0.016);
    atmosphere.update(warm.worldTimeSec, warm.focusPoint, camera.position);
    cliffWorld.update(warm.worldTimeSec, camera.position);
  } else {
    toothlessController.update(0.016);
    lightFuryController.update(0.016);
    atmosphere.update(0, new THREE.Vector3(0, 1.15, 0.35), camera.position);
    cliffWorld.update(0, camera.position);
  }
  composer.render();

  const clock = new THREE.Clock();
  let fpsAccum = 0;
  let fpsFrames = 0;
  let smoothedFps = 60;
  let wasFlightPlaying = false;

  function animate(): void {
    if (renderLoopHalted) return;
    rafHandle = requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;

    let effectiveWorldTime = elapsed;
    let worldFocus = new THREE.Vector3(0, 1.15, 0.35);
    const cameraLockedByStory = Boolean(storyDirector?.isCameraLocked());

    if (storyDirector) {
      const storyStep = storyDirector.update(dt);
      if (renderLoopHalted) return;
      effectiveWorldTime = storyStep.worldTimeSec;
      worldFocus.copy(storyStep.focusPoint);
    }

    const flightActiveBefore = flightChoreographer.isPlaying;
    const flightStep = !storyDirector
      ? flightChoreographer.update(dt * flightSpeedMultiplier, camera, controls.target)
      : { isAirborne: false, worldFocus };

    if (!storyDirector) {
      worldFocus.copy(flightStep.worldFocus);
    }

    controls.maxPolarAngle = flightStep.isAirborne || isUserMode ? Math.PI * 0.78 : Math.PI * 0.56;

    if (isUserMode && !cameraLockedByStory) {
      // Smoothly adapt rotate, pan & zoom speeds to viewing distance once Free Explore is unlocked!
      const viewDist = camera.position.distanceTo(controls.target);
      const closeT = THREE.MathUtils.clamp((viewDist - 1.5) / 28.0, 0, 1);
      controls.rotateSpeed = THREE.MathUtils.lerp(0.46, 0.72, closeT);
      controls.panSpeed = THREE.MathUtils.lerp(0.54, 1.02, closeT);
      controls.zoomSpeed = THREE.MathUtils.lerp(0.68, 0.96, closeT);
    }

    if (wasFlightPlaying && !flightChoreographer.isPlaying && devHud) {
      activeCamTransition = {
        goalPos: activeBookmark.position.clone(),
        goalTarget: activeBookmark.target.clone(),
      };
      devHud.updateFlightUI();
      devHud.syncControlsFromRig();
    }
    wasFlightPlaying = flightChoreographer.isPlaying;

    if (flightActiveBefore && devHud) {
      devHud.updateFlightUI();
    }

    // Apply WASD / Arrow / Q / E Free-Roam Camera Velocity (only when camera is unlocked!)
    roamDesired.set(0, 0, 0);
    if (!cameraLockedByStory && (!flightChoreographer.isPlaying || !flightChoreographer.followCamera || isUserMode)) {
      const moveFwd =
        (pressedKeys.has('KeyW') || pressedKeys.has('ArrowUp') ? 1 : 0) -
        (pressedKeys.has('KeyS') || pressedKeys.has('ArrowDown') ? 1 : 0);
      const moveSide =
        (pressedKeys.has('KeyD') || pressedKeys.has('ArrowRight') ? 1 : 0) -
        (pressedKeys.has('KeyA') || pressedKeys.has('ArrowLeft') ? 1 : 0);
      const moveUp =
        (pressedKeys.has('KeyE') ? 1 : 0) - (pressedKeys.has('KeyQ') ? 1 : 0);

      if (moveFwd !== 0 || moveSide !== 0 || moveUp !== 0) {
        activeCamTransition = null;
        camera.getWorldDirection(roamForward);
        roamRight.crossVectors(roamForward, camera.up).normalize();
        roamDesired
          .addScaledVector(roamForward, moveFwd)
          .addScaledVector(roamRight, moveSide);
        roamDesired.y += moveUp * 0.85;
        if (roamDesired.lengthSq() > 1e-5) roamDesired.normalize();

        const orbitDist = camera.position.distanceTo(controls.target);
        const baseSpeed = THREE.MathUtils.clamp(orbitDist * 0.78, 5.5, 30.0);
        const sprintMult =
          pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight') ? 2.2 : 1.0;
        roamDesired.multiplyScalar(baseSpeed * sprintMult);
      }
    }

    if (!cameraLockedByStory) {
      roamVelocity.lerp(roamDesired, 1.0 - Math.exp(-8.5 * dt));
      if (roamVelocity.lengthSq() > 1e-4) {
        camera.position.addScaledVector(roamVelocity, dt);
        controls.target.addScaledVector(roamVelocity, dt);
      }

      if (activeCamTransition && (!flightChoreographer.isPlaying || isUserMode)) {
        const alpha = 1.0 - Math.exp(-5.0 * dt);
        camera.position.lerp(activeCamTransition.goalPos, alpha);
        controls.target.lerp(activeCamTransition.goalTarget, alpha);
        if (
          camera.position.distanceTo(activeCamTransition.goalPos) < 0.012 &&
          controls.target.distanceTo(activeCamTransition.goalTarget) < 0.012
        ) {
          activeCamTransition = null;
        }
      }
      controls.update();

      // Prevent manual orbit or WASD roam camera from ever dipping below the ocean surface or into solid cliffs!
      const camGround = sampleWorldTerrainHeight(camera.position.x, camera.position.z);
      const minOrbitCamY = Math.max(-9.8, camGround + 0.55);
      if (camera.position.y < minOrbitCamY) {
        camera.position.y = minOrbitCamY;
      }
    }

    toothlessController.update(dt);
    lightFuryController.update(dt);
    if (storyDirector) {
      storyDirector.applyBiomechanicalPostPass(dt);
    }

    // Subtle Interactive Pointer Gaze-Tracking when Perched & Close (only when camera is unlocked!)
    const nowSec = performance.now() * 0.001;
    const pointerRecent = nowSec - lastPointerMoveTime < 4.0 && !isPointerDragging;
    const camNearPerch = camera.position.distanceTo(new THREE.Vector3(0, 1.1, 0)) < 26.0;
    const wantGaze =
      !cameraLockedByStory &&
      cursorGazeEnabled &&
      !flightChoreographer.isPlaying &&
      pointerRecent &&
      camNearPerch
        ? 1.0
        : 0.0;
    smoothedGazeWeight += (wantGaze - smoothedGazeWeight) * (1.0 - Math.exp(-4.2 * dt));
    smoothedGazeX += (pointerNDC.x - smoothedGazeX) * (1.0 - Math.exp(-5.5 * dt));
    smoothedGazeY += (pointerNDC.y - smoothedGazeY) * (1.0 - Math.exp(-5.5 * dt));

    if (smoothedGazeWeight > 0.002) {
      const yawAdd = smoothedGazeX * 0.22 * smoothedGazeWeight;
      const pitchAdd = -smoothedGazeY * 0.14 * smoothedGazeWeight;
      const rollAdd = -smoothedGazeX * 0.07 * smoothedGazeWeight;
      const eyeYawAdd = smoothedGazeX * 0.14 * smoothedGazeWeight;
      const eyePitchAdd = -smoothedGazeY * 0.10 * smoothedGazeWeight;

      if (tHeadBone) {
        tHeadBone.rotation.y += yawAdd * 0.72;
        tHeadBone.rotation.x += pitchAdd * 0.75;
        tHeadBone.rotation.z += rollAdd;
      }
      if (tNeckBone) {
        tNeckBone.rotation.y += yawAdd * 0.32;
        tNeckBone.rotation.x += pitchAdd * 0.25;
      }
      if (tEyeLBone && tEyeRBone) {
        tEyeLBone.rotation.y += eyeYawAdd;
        tEyeRBone.rotation.y += eyeYawAdd;
        tEyeLBone.rotation.x += eyePitchAdd;
        tEyeRBone.rotation.x += eyePitchAdd;
      }

      if (lHeadBone) {
        lHeadBone.rotation.y += yawAdd * 0.78;
        lHeadBone.rotation.x += pitchAdd * 0.78;
        lHeadBone.rotation.z += rollAdd * 1.15;
      }
      if (lNeckBone) {
        lNeckBone.rotation.y += yawAdd * 0.36;
        lNeckBone.rotation.x += pitchAdd * 0.28;
      }
      if (lEyeLBone && lEyeRBone) {
        lEyeLBone.rotation.y += eyeYawAdd;
        lEyeRBone.rotation.y += eyeYawAdd;
        lEyeLBone.rotation.x += eyePitchAdd;
        lEyeRBone.rotation.x += eyePitchAdd;
      }
    }

    const camDist = camera.position.distanceTo(worldFocus);
    const currentLOD = toothlessAsset.updateAutoLOD(camDist);
    lightFuryAsset.updateAutoLOD(camDist);

    atmosphere.update(effectiveWorldTime, worldFocus, camera.position);
    cliffWorld.update(effectiveWorldTime, camera.position);

    fpsAccum += dt;
    fpsFrames++;
    if (fpsAccum >= 0.4) {
      const instFps = fpsFrames / fpsAccum;
      smoothedFps = smoothedFps * 0.65 + instFps * 0.35;
      if (devHud) {
        devHud.updateTelemetry(smoothedFps, currentLOD);
      }
      fpsAccum = 0;
      fpsFrames = 0;
    }

    composer.render();

    if (snapshotPending) {
      snapshotPending = false;
      try {
        const dataUrl = renderer.domElement.toDataURL('image/png');
        const link = document.createElement('a');
        const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
        link.download = isUserMode
          ? `our-world-${stamp}.png`
          : `our-world-studio-${stamp}.png`;
        link.href = dataUrl;
        link.click();
        triggerShutter();
        showToastMsg('Memory Captured (.PNG)');
      } catch {
        showToastMsg('Snapshot unavailable on this device');
      }
    }
  }

  animate();
  await loadingScreen.completeAndDissolve(hudRoot);
}

bootstrap();
