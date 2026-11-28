import * as THREE from 'three';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import {
  FlightSubjectMode,
  ToothlessFlightChoreographer,
} from '../character/FlightChoreographer';
import {
  DEFAULT_HERO_RIG_STATE,
  TOOTHLESS_VIBE_PRESETS,
  ToothlessRigController,
  ToothlessRigState,
} from '../character/ToothlessRigController';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import {
  DEFAULT_LIGHT_FURY_STATE,
  LIGHT_FURY_VIBE_PRESETS,
  LightFuryRigController,
  LightFuryRigState,
} from '../character/lightfury/LightFuryRigController';
import {
  NordicAtmosphereController,
  WeatherPresetId,
} from './NordicAtmosphere';
import {
  DEFAULT_OCEAN_PARAMS,
  NorthSeaOceanController,
  OceanWaveParams,
} from './NorthSeaOcean';

function smoothstep01(x: number): number {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
}

interface WeatherChapter {
  presetId: WeatherPresetId;
  holdSec: number;
  fadeSec: number;
  sunDriftStartDeg: number;
  sunDriftEndDeg: number;
  ocean: OceanWaveParams;
}

interface PerchedVignettePair {
  name: string;
  durationSec: number;
  toothless: ToothlessRigState;
  lightFury: LightFuryRigState;
}

function getToothlessPresetState(id: string): ToothlessRigState {
  const found = TOOTHLESS_VIBE_PRESETS.find((p) => p.id === id);
  return { ...DEFAULT_HERO_RIG_STATE, ...(found ? found.patch : {}) };
}

function getLightFuryPresetState(id: string): LightFuryRigState {
  const found = LIGHT_FURY_VIBE_PRESETS.find((p) => p.id === id);
  return { ...DEFAULT_LIGHT_FURY_STATE, ...(found ? found.patch : {}) };
}

function lerpObjectNumeric<T extends object>(out: T, a: T, b: T, alpha: number): void {
  const keys = Object.keys(a) as Array<keyof T>;
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const va = a[k];
    const vb = b[k];
    if (typeof va === 'number' && typeof vb === 'number') {
      (out[k] as unknown as number) = va + (vb - va) * alpha;
    } else if (typeof vb === 'boolean') {
      out[k] = vb;
    }
  }
}

export interface LivingWorldDirector {
  update: (dt: number, elapsedSec: number) => void;
}

/**
 * Autonomous Living-Cinema World Director for the User Interface:
 * - Continuously evolves Time-of-Day & Weather sequentially (Golden Hour -> Crimson Dusk ->
 *   Starlit Aurora Night -> Misty Rain / Thunder Squall -> Clear Nordic Day -> Golden Hour)
 *   with smooth Hermite crossfades, solar arc drift, synchronized sea states, and subtle cycle-to-cycle variation.
 * - Choreographs Toothless & the Light Fury through natural cliffside courtship vignettes,
 *   weather-responsive bioluminescence & mirror-cloak displays, and periodic duet/solo flights
 *   (while the perched companion tracks their flying mate across the sky), NEVER hijacking the user's camera!
 */
export function createLivingWorldDirector(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  atmosphere: NordicAtmosphereController,
  ocean: NorthSeaOceanController,
  toothlessAsset: ToothlessCharacterAsset,
  toothlessController: ToothlessRigController,
  lightFuryAsset: LightFuryCharacterAsset,
  lightFuryController: LightFuryRigController,
  flightChoreographer: ToothlessFlightChoreographer
): LivingWorldDirector {
  // User always navigates freely — flight choreographer must NEVER override user's camera!
  flightChoreographer.followCamera = false;
  flightChoreographer.loop = false;

  // Bounded, natural pseudo-random helper with mild session variety
  let rngState = Math.floor((Date.now() % 86400000) * 1.37) + 17389;
  const nextRand = (): number => {
    rngState = (rngState * 1664525 + 1013904223) >>> 0;
    return rngState / 4294967296;
  };
  const randRange = (min: number, max: number): number => min + (max - min) * nextRand();

  // ==========================================================================
  // 1. SEQUENTIAL TIME-OF-DAY & WEATHER TIMELINE (WITH NATURAL CYCLE VARIATION)
  // ==========================================================================
  let weatherCycleCount = 0;
  let lastRainWasStorm = false;

  const buildWeatherCycle = (): WeatherChapter[] => {
    // Alternate bias so visitors experience both Misty Coastal Rain and dramatic Thunder Squall across cycles,
    // while preserving natural organic randomness!
    const stormChance = weatherCycleCount === 0 ? 0.55 : lastRainWasStorm ? 0.25 : 0.80;
    const useThunderSquall = nextRand() < stormChance;
    lastRainWasStorm = useThunderSquall;
    weatherCycleCount++;

    const morningRainChapter: WeatherChapter = useThunderSquall
      ? {
          presetId: 'stormy-squall',
          holdSec: randRange(18.0, 23.0),
          fadeSec: 12.5,
          sunDriftStartDeg: 0.0,
          sunDriftEndDeg: 1.5,
          ocean: {
            waveAmplitude: 1.36,
            waveSpeed: 1.44,
            seaChoppiness: 0.84,
          },
        }
      : {
          presetId: 'misty-overcast',
          holdSec: randRange(18.0, 23.0),
          fadeSec: 12.0,
          sunDriftStartDeg: -1.5,
          sunDriftEndDeg: 2.0,
          ocean: {
            waveAmplitude: 0.82,
            waveSpeed: 1.08,
            seaChoppiness: 0.58,
          },
        };

    return [
      // 1. Warm Golden Hour Sanctuary
      {
        presetId: 'golden-hour',
        holdSec: randRange(21.0, 25.0),
        fadeSec: 12.0,
        sunDriftStartDeg: 1.4,
        sunDriftEndDeg: -1.6,
        ocean: { ...DEFAULT_OCEAN_PARAMS },
      },
      // 2. Crimson & Amethyst Dusk
      {
        presetId: 'dawn-dusk',
        holdSec: randRange(17.0, 21.0),
        fadeSec: 12.5,
        sunDriftStartDeg: 1.2,
        sunDriftEndDeg: -1.4,
        ocean: {
          waveAmplitude: 0.38,
          waveSpeed: 0.80,
          seaChoppiness: 0.30,
        },
      },
      // 3. Starlit Aurora Borealis Night
      {
        presetId: 'starlit-night',
        holdSec: randRange(22.0, 26.0),
        fadeSec: 13.0,
        sunDriftStartDeg: -0.8,
        sunDriftEndDeg: 1.2,
        ocean: {
          waveAmplitude: 0.28,
          waveSpeed: 0.68,
          seaChoppiness: 0.22,
        },
      },
      // 4. Morning Coastal Weather (Misty Rain OR North-Atlantic Thunder Squall)
      morningRainChapter,
      // 5. Crisp Clear Nordic Day -> Afternoon Sun Arc back into Golden Hour
      {
        presetId: 'clear-day',
        holdSec: randRange(21.0, 25.0),
        fadeSec: 12.5,
        sunDriftStartDeg: -5.0,
        sunDriftEndDeg: -12.0,
        ocean: {
          waveAmplitude: 0.62,
          waveSpeed: 0.94,
          seaChoppiness: 0.44,
        },
      },
    ];
  };

  let weatherChapters: WeatherChapter[] = buildWeatherCycle();
  let nextWeatherChapters: WeatherChapter[] = buildWeatherCycle();
  let weatherIdx = 0;
  let weatherTimer = 0;

  let curNightAmount = 0;
  let curStormAmount = 0;
  let curDuskAmount = 0;

  // ==========================================================================
  // 2. SEQUENTIAL + REASONABLY RANDOMIZED DRAGON LIFE & FLIGHT CHOREOGRAPHY
  // ==========================================================================
  const tlBasePose = { ...DEFAULT_HERO_RIG_STATE };
  const lfBasePose = { ...DEFAULT_LIGHT_FURY_STATE };
  const tlFromPose = { ...DEFAULT_HERO_RIG_STATE };
  const lfFromPose = { ...DEFAULT_LIGHT_FURY_STATE };
  const tlWorkPose = { ...DEFAULT_HERO_RIG_STATE };
  const lfWorkPose = { ...DEFAULT_LIGHT_FURY_STATE };

  type BehaviorStage =
    | {
        kind: 'perched-sequence';
        vignettes: PerchedVignettePair[];
        vIdx: number;
        vTimer: number;
        blendDur: number;
      }
    | {
        kind: 'flight';
        mode: FlightSubjectMode;
        started: boolean;
      };

  let flightBeatCounter = 0;

  const chooseNextFlightMode = (): FlightSubjectMode => {
    flightBeatCounter++;
    // First flight is always the iconic synchronized Twin Courtship Duet!
    if (flightBeatCounter === 1) return 'duet';
    // Subsequent flights alternate duet with solo flights (with mild organic randomness)
    const r = nextRand();
    if (flightBeatCounter % 2 === 1) {
      return r < 0.72 ? 'duet' : r < 0.86 ? 'light-fury' : 'toothless';
    }
    if (r < 0.42) return 'light-fury';
    if (r < 0.82) return 'toothless';
    return 'duet';
  };

  const buildPerchedVignettes = (isInitialOpening: boolean): PerchedVignettePair[] => {
    const list: PerchedVignettePair[] = [];

    // 1. Calm noble sentinel arrival / landing settle
    list.push({
      name: 'Noble Cliff Watch',
      durationSec: isInitialOpening ? randRange(5.5, 7.0) : randRange(4.2, 5.6),
      toothless: getToothlessPresetState('hero-perch'),
      lightFury: getLightFuryPresetState('serene-mate'),
    });

    // 2. Context-aware middle vignette (Night Biolum / Storm Alpha / Playful Courtship)
    if (curStormAmount > 0.35) {
      const stormVariant = nextRand() < 0.55 ? 'lightning-storm' : 'alpha-roar';
      list.push({
        name: 'Storm Alpha Display',
        durationSec: randRange(6.2, 8.0),
        toothless: getToothlessPresetState(stormVariant),
        lightFury: getLightFuryPresetState(nextRand() < 0.5 ? 'strike-hiss' : 'hidden-world-biolum'),
      });
    } else if (curNightAmount > 0.35) {
      list.push({
        name: 'Hidden World Bioluminescence',
        durationSec: randRange(6.8, 8.6),
        toothless: {
          ...getToothlessPresetState('curious-tilt'),
          alphaGlow: 0.88,
          biolumGlow: 0.96,
          wingUnfurl: 0.68,
        },
        lightFury: getLightFuryPresetState('hidden-world-biolum'),
      });
      if (nextRand() < 0.75) {
        list.push({
          name: 'Optical Mirror-Cloak Shimmer',
          durationSec: randRange(5.4, 7.0),
          toothless: {
            ...getToothlessPresetState('gummy-smile'),
            alphaGlow: 0.62,
            biolumGlow: 0.88,
          },
          lightFury: getLightFuryPresetState('mirror-cloak'),
        });
      }
    } else {
      // Daytime / Golden-Hour / Dusk affectionate courtship repertoire (shuffled naturally!)
      const roll = nextRand();
      if (roll < 0.36) {
        list.push({
          name: 'Courtship Wing-Cape & Coy Peek',
          durationSec: randRange(6.0, 7.8),
          toothless: getToothlessPresetState('courtship-cape'),
          lightFury: getLightFuryPresetState('coy-wing-veil'),
        });
        list.push({
          name: 'Gummy Grin & Happy Purr',
          durationSec: randRange(5.5, 7.2),
          toothless: getToothlessPresetState('gummy-smile'),
          lightFury: getLightFuryPresetState('happy-purr'),
        });
      } else if (roll < 0.72) {
        list.push({
          name: 'Curious Feline Tilts',
          durationSec: randRange(5.6, 7.2),
          toothless: getToothlessPresetState('curious-tilt'),
          lightFury: getLightFuryPresetState('curious-cat'),
        });
        list.push({
          name: 'Gummy Smile & Coy Wing Veil',
          durationSec: randRange(5.8, 7.4),
          toothless: getToothlessPresetState('gummy-smile'),
          lightFury: nextRand() < 0.55
            ? getLightFuryPresetState('happy-purr')
            : getLightFuryPresetState('coy-wing-veil'),
        });
      } else {
        list.push({
          name: 'Light Fury Shimmer & Noble Gaze',
          durationSec: randRange(5.8, 7.4),
          toothless: getToothlessPresetState('curious-tilt'),
          lightFury: getLightFuryPresetState(curDuskAmount > 0.25 ? 'mirror-cloak' : 'happy-purr'),
        });
        list.push({
          name: 'Courtship Wing Display',
          durationSec: randRange(5.6, 7.2),
          toothless: getToothlessPresetState('courtship-cape'),
          lightFury: getLightFuryPresetState('curious-cat'),
        });
      }
    }

    // 3. Pre-flight calm readiness settle on the cliff edge before leaping skyward
    list.push({
      name: 'Pre-Flight Horizon Focus',
      durationSec: randRange(3.4, 4.6),
      toothless: {
        ...DEFAULT_HERO_RIG_STATE,
        forelegStance: -0.18,
        earPerk: 0.92,
        wingUnfurl: 0.58,
      },
      lightFury: {
        ...DEFAULT_LIGHT_FURY_STATE,
        forelegStance: -0.16,
        earPerk: 0.90,
        wingUnfurl: 0.52,
      },
    });

    return list;
  };

  let activeStage: BehaviorStage = {
    kind: 'perched-sequence',
    vignettes: buildPerchedVignettes(true),
    vIdx: 0,
    vTimer: 0,
    blendDur: 2.2,
  };

  const tmpFlyPos = new THREE.Vector3();
  const tmpPerchPos = new THREE.Vector3();

  return {
    update(dt: number, elapsedSec: number): void {
      // Always keep camera free for the user!
      flightChoreographer.followCamera = false;

      // ----------------------------------------------------------------------
      // A. Advance Continuous Time-of-Day, Sky, Rain/Storm & Ocean Swells
      // ----------------------------------------------------------------------
      const curChap = weatherChapters[weatherIdx];
      const nextChap =
        weatherIdx + 1 < weatherChapters.length
          ? weatherChapters[weatherIdx + 1]
          : nextWeatherChapters[0];

      const totalChapSec = curChap.holdSec + curChap.fadeSec;
      weatherTimer += dt;

      if (weatherTimer >= totalChapSec) {
        weatherTimer -= totalChapSec;
        weatherIdx++;
        if (weatherIdx >= weatherChapters.length) {
          weatherChapters = nextWeatherChapters;
          nextWeatherChapters = buildWeatherCycle();
          weatherIdx = 0;
        }
      }

      const activeChap = weatherChapters[weatherIdx];
      const upcomingChap =
        weatherIdx + 1 < weatherChapters.length
          ? weatherChapters[weatherIdx + 1]
          : nextWeatherChapters[0];
      const chapTotal = activeChap.holdSec + activeChap.fadeSec;
      const chapProgress = THREE.MathUtils.clamp(weatherTimer / Math.max(0.1, chapTotal), 0, 1);
      const fadeRaw =
        weatherTimer <= activeChap.holdSec
          ? 0
          : (weatherTimer - activeChap.holdSec) / Math.max(0.1, activeChap.fadeSec);
      const fadeAlpha = smoothstep01(fadeRaw);

      const sunDrift = THREE.MathUtils.lerp(
        activeChap.sunDriftStartDeg,
        activeChap.sunDriftEndDeg,
        smoothstep01(chapProgress)
      ) * (1.0 - fadeAlpha) + upcomingChap.sunDriftStartDeg * fadeAlpha;
      const azimDrift = Math.sin(elapsedSec * 0.025) * 4.5;

      atmosphere.blendPresets(
        activeChap.presetId,
        upcomingChap.presetId,
        fadeAlpha,
        renderer,
        scene,
        sunDrift,
        azimDrift
      );

      ocean.setOceanParams({
        waveAmplitude: THREE.MathUtils.lerp(
          activeChap.ocean.waveAmplitude,
          upcomingChap.ocean.waveAmplitude,
          fadeAlpha
        ),
        waveSpeed: THREE.MathUtils.lerp(
          activeChap.ocean.waveSpeed,
          upcomingChap.ocean.waveSpeed,
          fadeAlpha
        ),
        seaChoppiness: THREE.MathUtils.lerp(
          activeChap.ocean.seaChoppiness,
          upcomingChap.ocean.seaChoppiness,
          fadeAlpha
        ),
      });

      curNightAmount = atmosphere.sharedUniforms.uNightFactor.value;
      curStormAmount =
        (activeChap.presetId === 'stormy-squall' ? 1 - fadeAlpha : 0) +
        (upcomingChap.presetId === 'stormy-squall' ? fadeAlpha : 0);
      curDuskAmount =
        (activeChap.presetId === 'dawn-dusk' ? 1 - fadeAlpha : 0) +
        (upcomingChap.presetId === 'dawn-dusk' ? fadeAlpha : 0);

      // ----------------------------------------------------------------------
      // B. Advance Sequential + Reasonably Varied Dragon Actions & Flights
      // ----------------------------------------------------------------------
      if (activeStage.kind === 'perched-sequence') {
        const vig = activeStage.vignettes[activeStage.vIdx];
        activeStage.vTimer += dt;

        const blendT = smoothstep01(activeStage.vTimer / Math.max(0.25, activeStage.blendDur));
        lerpObjectNumeric(tlWorkPose, tlFromPose, vig.toothless, blendT);
        lerpObjectNumeric(lfWorkPose, lfFromPose, vig.lightFury, blendT);

        // Layer gentle organic micro-motion (curious gaze drift, ear nuances & ambient sky luminescence!)
        const slowWaveA = Math.sin(elapsedSec * 0.62);
        const slowWaveB = Math.cos(elapsedSec * 0.47 + 1.1);
        const nightBiolumFloor = smoothstep01((curNightAmount - 0.15) / 0.65) * 0.88 + curDuskAmount * 0.24;
        const stormAlphaFloor = smoothstep01(curStormAmount) * 0.72;

        tlWorkPose.headYaw = THREE.MathUtils.clamp(tlWorkPose.headYaw + slowWaveA * 0.08, -1, 1);
        tlWorkPose.tailYaw = THREE.MathUtils.clamp(tlWorkPose.tailYaw + slowWaveB * 0.10, -1, 1);
        tlWorkPose.biolumGlow = Math.max(tlWorkPose.biolumGlow, nightBiolumFloor);
        tlWorkPose.alphaGlow = Math.max(tlWorkPose.alphaGlow, nightBiolumFloor * 0.65, stormAlphaFloor);

        lfWorkPose.headYaw = THREE.MathUtils.clamp(lfWorkPose.headYaw - slowWaveA * 0.08, -1, 1);
        lfWorkPose.tailYaw = THREE.MathUtils.clamp(lfWorkPose.tailYaw - slowWaveB * 0.11, -1, 1);
        lfWorkPose.biolumGlow = Math.max(lfWorkPose.biolumGlow, nightBiolumFloor * 0.96);
        lfWorkPose.radiantGlow = Math.max(lfWorkPose.radiantGlow, 0.34 + nightBiolumFloor * 0.34);

        toothlessController.setState(tlWorkPose);
        lightFuryController.setState(lfWorkPose);

        if (activeStage.vTimer >= vig.durationSec) {
          Object.assign(tlFromPose, tlWorkPose);
          Object.assign(lfFromPose, lfWorkPose);
          activeStage.vIdx++;
          activeStage.vTimer = 0;
          activeStage.blendDur = randRange(2.1, 2.9);

          if (activeStage.vIdx >= activeStage.vignettes.length) {
            // Launch into the next scheduled flight!
            const nextMode = chooseNextFlightMode();
            activeStage = {
              kind: 'flight',
              mode: nextMode,
              started: false,
            };
          }
        }
      } else {
        if (!activeStage.started) {
          activeStage.started = true;
          flightChoreographer.setSubjectMode(activeStage.mode);
          flightChoreographer.followCamera = false;
          flightChoreographer.loop = false;
          flightChoreographer.startFromBeginning();
        } else if (!flightChoreographer.isPlaying) {
          // Touchdown complete! Smoothly transition back into a fresh perched chapter!
          Object.assign(tlFromPose, tlBasePose);
          Object.assign(lfFromPose, lfBasePose);
          activeStage = {
            kind: 'perched-sequence',
            vignettes: buildPerchedVignettes(false),
            vIdx: 0,
            vTimer: 0,
            blendDur: 2.3,
          };
        } else if (activeStage.mode !== 'duet') {
          // When one dragon flies solo, the perched mate on the cliff watches them soar across the sky!
          const tChest = toothlessAsset.rig.boneMap.get('chest');
          const lChest = lightFuryAsset.rig.boneMap.get('chest');
          if (tChest && lChest) {
            if (activeStage.mode === 'light-fury') {
              lChest.getWorldPosition(tmpFlyPos);
              tChest.getWorldPosition(tmpPerchPos);
              const dx = tmpFlyPos.x - tmpPerchPos.x;
              const dy = tmpFlyPos.y - tmpPerchPos.y;
              const dz = tmpFlyPos.z - tmpPerchPos.z;
              const horiz = Math.max(0.5, Math.hypot(dx, dz));
              const relYaw = THREE.MathUtils.clamp(Math.atan2(dx, dz) * 0.72, -0.85, 0.85);
              const relPitch = THREE.MathUtils.clamp(Math.atan2(dy, horiz) * 0.85, -0.45, 0.72);
              toothlessController.setState({
                ...DEFAULT_HERO_RIG_STATE,
                neckYaw: relYaw * 0.55,
                headYaw: relYaw * 0.85,
                headPitch: relPitch,
                eyeYaw: THREE.MathUtils.clamp(relYaw * 0.5, -0.6, 0.6),
                earPerk: 0.94,
                biolumGlow: Math.max(0, curNightAmount * 0.85),
                alphaGlow: Math.max(0.08, curNightAmount * 0.55, curStormAmount * 0.65),
              });
            } else {
              tChest.getWorldPosition(tmpFlyPos);
              lChest.getWorldPosition(tmpPerchPos);
              const dx = tmpFlyPos.x - tmpPerchPos.x;
              const dy = tmpFlyPos.y - tmpPerchPos.y;
              const dz = tmpFlyPos.z - tmpPerchPos.z;
              const horiz = Math.max(0.5, Math.hypot(dx, dz));
              const relYaw = THREE.MathUtils.clamp(Math.atan2(dx, dz) * 0.72, -0.85, 0.85);
              const relPitch = THREE.MathUtils.clamp(Math.atan2(dy, horiz) * 0.85, -0.45, 0.72);
              lightFuryController.setState({
                ...DEFAULT_LIGHT_FURY_STATE,
                neckYaw: relYaw * 0.55,
                headYaw: relYaw * 0.85,
                headPitch: relPitch,
                headRoll: 0.18,
                eyeYaw: THREE.MathUtils.clamp(relYaw * 0.5, -0.6, 0.6),
                earPerk: 0.92,
                biolumGlow: Math.max(0, curNightAmount * 0.90),
              });
            }
          }
        }
      }
    },
  };
}
