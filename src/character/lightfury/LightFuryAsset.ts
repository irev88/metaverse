import * as THREE from 'three';
import { LODMeshStats } from '../ToothlessAsset';
import { ToothlessRigSkeleton } from '../ToothlessSkeleton';
import { LODLevel } from '../geometry/BodyAndHeadBuilder';
import { mergeSkinnedGeometries } from '../geometry/GeometryUtils';
import { createLightFurySkeleton } from './LightFurySkeleton';
import { createLightFuryMaterialSet, LightFuryMaterialSet } from './LightFuryMaterials';
import { buildLightFuryBodyAndHeadGeometry } from './LightFuryBodyAndHeadBuilder';
import { buildLightFuryOralEyesAndClawsGeometries } from './LightFuryOralAndEyesBuilder';
import { buildLightFuryWingsAndFinsGeometries } from './LightFuryWingsAndFinsBuilder';

export interface LightFuryCharacterAsset {
  rootGroup: THREE.Group;
  rig: ToothlessRigSkeleton;
  materials: LightFuryMaterialSet;
  lodGroups: Record<LODLevel, THREE.Group>;
  dorsalSailMeshes: THREE.SkinnedMesh[];
  hullDepthMeshes: THREE.SkinnedMesh[];
  lodStats: Record<LODLevel, LODMeshStats>;
  activeLOD: LODLevel;
  autoLOD: boolean;
  setActiveLOD: (lod: LODLevel) => void;
  updateAutoLOD: (cameraDistance: number) => LODLevel;
}

export function createLightFuryCharacterAsset(): LightFuryCharacterAsset {
  const rig = createLightFurySkeleton();
  const materials = createLightFuryMaterialSet();

  const rootGroup = new THREE.Group();
  rootGroup.name = 'LightFury_HiddenWorld_Hybrid';
  rootGroup.add(rig.rootBone);
  rig.rootBone.updateMatrixWorld(true);
  rig.skeleton.calculateInverses();

  const dorsalSailMeshes: THREE.SkinnedMesh[] = [];
  const hullDepthMeshes: THREE.SkinnedMesh[] = [];
  const lodGroups = {} as Record<LODLevel, THREE.Group>;
  const lodStats = {} as Record<LODLevel, LODMeshStats>;

  for (const lod of [0, 1, 2] as LODLevel[]) {
    const group = new THREE.Group();
    group.name = `LightFury_LOD${lod}`;

    const bodyHeadGeom = buildLightFuryBodyAndHeadGeometry(rig, lod);
    const oralEyesClaws = buildLightFuryOralEyesAndClawsGeometries(rig, lod);
    const wingsFins = buildLightFuryWingsAndFinsGeometries(rig, lod);

    const unifiedOrganicSkinGeom = mergeSkinnedGeometries([
      bodyHeadGeom,
      oralEyesClaws.jawSkinGeometry,
      wingsFins.wingSparsSkinGeometry,
    ]);

    const unifiedClawsGeom = oralEyesClaws.clawsGeometry;

    const makeSkinnedSubMesh = (
      name: string,
      geom: THREE.BufferGeometry,
      mat: THREE.Material,
      castShadow = true,
      receiveShadow = true
    ): THREE.SkinnedMesh => {
      const sm = new THREE.SkinnedMesh(geom, mat);
      sm.name = `${name}_LOD${lod}`;
      sm.castShadow = castShadow;
      sm.receiveShadow = receiveShadow;
      sm.frustumCulled = false;
      sm.bind(rig.skeleton, new THREE.Matrix4());
      return sm;
    };

    const bodySkinMesh = makeSkinnedSubMesh('LightFuryBodyAndHeadSkin', unifiedOrganicSkinGeom, materials.skinMaterial);
    const wingMembraneMesh = makeSkinnedSubMesh('LightFuryIridescentWingsAndHeartTail', wingsFins.wingMembraneGeometry, materials.wingMembraneMaterial);
    const dorsalSailMesh = makeSkinnedSubMesh('LightFuryContinuousDorsalSail', wingsFins.dorsalSpinesGeometry, materials.skinMaterial);
    dorsalSailMeshes.push(dorsalSailMesh);

    const gumsMesh = makeSkinnedSubMesh('LightFuryOralGums', oralEyesClaws.oralGumsGeometry, materials.oralGumMaterial, false, true);
    const teethMesh = makeSkinnedSubMesh('LightFuryRetractableTeeth', oralEyesClaws.teethGeometry, materials.teethMaterial, true, true);
    const tongueMesh = makeSkinnedSubMesh('LightFuryArticulatedTongue', oralEyesClaws.tongueGeometry, materials.tongueMaterial, false, true);
    const irisMesh = makeSkinnedSubMesh('LightFurySkyBlueIrises', oralEyesClaws.irisGeometry, materials.eyeMaterials.irisMaterial, false, false);
    const corneaMesh = makeSkinnedSubMesh('LightFuryRefractiveCorneas', oralEyesClaws.corneaGeometry, materials.eyeMaterials.corneaMaterial, false, false);
    const clawsMesh = makeSkinnedSubMesh('LightFurySlatePearlClaws', unifiedClawsGeom, materials.clawMaterial, true, true);

    // Assign cloak-safe render orders:
    // Depth pre-pass (renderOrder 10) writes exact visible outer surface min_i(z_i),
    // then visible meshes (renderOrder 11..13) shade ONLY frontmost unoccluded pixels — ZERO skull/eyeball/teeth X-ray bleed!
    for (const m of [bodySkinMesh, dorsalSailMesh, clawsMesh, gumsMesh, teethMesh, tongueMesh, irisMesh]) {
      m.renderOrder = 11;
    }
    corneaMesh.renderOrder = 12;
    wingMembraneMesh.renderOrder = 13;

    const subMeshes = [
      bodySkinMesh,
      wingMembraneMesh,
      dorsalSailMesh,
      gumsMesh,
      teethMesh,
      tongueMesh,
      irisMesh,
      corneaMesh,
      clawsMesh,
    ];

    // Companion zero-color depth pre-pass meshes (enabled automatically whenever thermalCloak > 0.001)
    const depthSpecs: Array<[string, THREE.BufferGeometry, THREE.Material, boolean]> = [
      ['LFDepth_BodySkin', unifiedOrganicSkinGeom, materials.hullDepthMaterial, false],
      ['LFDepth_WingMembrane', wingsFins.wingMembraneGeometry, materials.doubleSidedHullDepthMaterial, false],
      ['LFDepth_DorsalSail', wingsFins.dorsalSpinesGeometry, materials.hullDepthMaterial, true],
      ['LFDepth_Gums', oralEyesClaws.oralGumsGeometry, materials.doubleSidedHullDepthMaterial, false],
      ['LFDepth_Teeth', oralEyesClaws.teethGeometry, materials.hullDepthMaterial, false],
      ['LFDepth_Tongue', oralEyesClaws.tongueGeometry, materials.hullDepthMaterial, false],
      ['LFDepth_Irises', oralEyesClaws.irisGeometry, materials.hullDepthMaterial, false],
      ['LFDepth_Claws', unifiedClawsGeom, materials.hullDepthMaterial, false],
    ];

    for (const [dName, dGeom, dMat, isDorsal] of depthSpecs) {
      const dm = makeSkinnedSubMesh(dName, dGeom, dMat, false, false);
      dm.renderOrder = 10;
      dm.visible = false;
      dm.userData.excludeFromExport = true;
      group.add(dm);
      hullDepthMeshes.push(dm);
      if (isDorsal) {
        dorsalSailMeshes.push(dm);
      }
    }

    let tris = 0;
    let verts = 0;
    for (const m of subMeshes) {
      group.add(m);
      const idx = m.geometry.getIndex();
      tris += idx ? idx.count / 3 : m.geometry.getAttribute('position').count / 3;
      verts += m.geometry.getAttribute('position').count;
    }

    group.visible = lod === 0;
    rootGroup.add(group);
    lodGroups[lod] = group;
    lodStats[lod] = {
      lod,
      triangles: Math.round(tris),
      vertices: verts,
      subMeshCount: subMeshes.length,
    };
  }

  const asset: LightFuryCharacterAsset = {
    rootGroup,
    rig,
    materials,
    lodGroups,
    dorsalSailMeshes,
    hullDepthMeshes,
    lodStats,
    activeLOD: 0,
    autoLOD: false,
    setActiveLOD(lod: LODLevel) {
      asset.activeLOD = lod;
      for (const k of [0, 1, 2] as LODLevel[]) {
        lodGroups[k].visible = k === lod;
      }
    },
    updateAutoLOD(cameraDistance: number): LODLevel {
      if (!asset.autoLOD) return asset.activeLOD;
      const nextLOD: LODLevel = cameraDistance < 9.5 ? 0 : cameraDistance < 20.0 ? 1 : 2;
      if (nextLOD !== asset.activeLOD) {
        asset.setActiveLOD(nextLOD);
      }
      return asset.activeLOD;
    },
  };

  return asset;
}
