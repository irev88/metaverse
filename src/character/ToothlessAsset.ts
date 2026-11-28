import * as THREE from 'three';
import { createToothlessSkeleton, ToothlessRigSkeleton } from './ToothlessSkeleton';
import { createToothlessMaterialSet, ToothlessMaterialSet } from './materials/ToothlessMaterials';
import { buildBodyAndHeadGeometry, LODLevel } from './geometry/BodyAndHeadBuilder';
import { buildOralEyesAndClawsGeometries } from './geometry/OralAndEyesBuilder';
import { buildWingsAndFinsGeometries } from './geometry/WingsAndFinsBuilder';
import { buildProstheticTailGeometries } from './geometry/ProstheticTailBuilder';
import { mergeSkinnedGeometries } from './geometry/GeometryUtils';

export interface LODMeshStats {
  lod: LODLevel;
  triangles: number;
  vertices: number;
  subMeshCount: number;
}

export interface ToothlessCharacterAsset {
  rootGroup: THREE.Group;
  rig: ToothlessRigSkeleton;
  materials: ToothlessMaterialSet;
  lodGroups: Record<LODLevel, THREE.Group>;
  dorsalSpineMeshes: THREE.SkinnedMesh[];
  lodStats: Record<LODLevel, LODMeshStats>;
  activeLOD: LODLevel;
  autoLOD: boolean;
  setActiveLOD: (lod: LODLevel) => void;
  updateAutoLOD: (cameraDistance: number) => LODLevel;
}

export function createToothlessCharacterAsset(): ToothlessCharacterAsset {
  const rig = createToothlessSkeleton();
  const materials = createToothlessMaterialSet();

  const rootGroup = new THREE.Group();
  rootGroup.name = 'Toothless_HiddenWorld_Hybrid';
  rootGroup.add(rig.rootBone);
  rig.rootBone.updateMatrixWorld(true);
  rig.skeleton.calculateInverses();

  const dorsalSpineMeshes: THREE.SkinnedMesh[] = [];
  const lodGroups = {} as Record<LODLevel, THREE.Group>;
  const lodStats = {} as Record<LODLevel, LODMeshStats>;

  for (const lod of [0, 1, 2] as LODLevel[]) {
    const group = new THREE.Group();
    group.name = `Toothless_LOD${lod}`;

    // 1. Seamless Organic Body, Cranium, Eyelids, Ear-Plates, Limbs, Hinged Jaw & Wing Spars
    const bodyHeadGeom = buildBodyAndHeadGeometry(rig, lod);
    const oralEyesClaws = buildOralEyesAndClawsGeometries(rig, lod);
    const wingsFins = buildWingsAndFinsGeometries(rig, lod);
    const prosthetic = buildProstheticTailGeometries(rig, lod);

    const unifiedOrganicSkinGeom = mergeSkinnedGeometries([
      bodyHeadGeom,
      oralEyesClaws.jawSkinGeometry,
      wingsFins.wingSparsSkinGeometry,
    ]);

    const unifiedClawsGeom = mergeSkinnedGeometries([
      oralEyesClaws.clawsGeometry,
      wingsFins.alulaClawsGeometry,
    ]);

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

    const bodySkinMesh = makeSkinnedSubMesh('BodyAndHeadSkin', unifiedOrganicSkinGeom, materials.skinMaterial);
    const wingMembraneMesh = makeSkinnedSubMesh('FlightPatagiumMembranes', wingsFins.wingMembraneGeometry, materials.wingMembraneMaterial);
    const dorsalSpinesMesh = makeSkinnedSubMesh('VSplittingDorsalSpines', wingsFins.dorsalSpinesGeometry, materials.skinMaterial);
    dorsalSpineMeshes.push(dorsalSpinesMesh);

    // Modular Internal Oral & Ocular Sub-Meshes (Option A)
    const gumsMesh = makeSkinnedSubMesh('OralGums', oralEyesClaws.oralGumsGeometry, materials.oralGumMaterial, false, true);
    const teethMesh = makeSkinnedSubMesh('RetractableTeeth', oralEyesClaws.teethGeometry, materials.teethMaterial, true, true);
    const tongueMesh = makeSkinnedSubMesh('ArticulatedTongue', oralEyesClaws.tongueGeometry, materials.tongueMaterial, false, true);
    const irisMesh = makeSkinnedSubMesh('LightReactiveIrises', oralEyesClaws.irisGeometry, materials.eyeMaterials.irisMaterial, false, false);
    const corneaMesh = makeSkinnedSubMesh('RefractiveCorneas', oralEyesClaws.corneaGeometry, materials.eyeMaterials.corneaMaterial, false, false);
    corneaMesh.renderOrder = 2;
    const clawsMesh = makeSkinnedSubMesh('ObsidianClaws', unifiedClawsGeom, materials.clawMaterial, true, true);

    // Modular Hidden World Automatic Left Prosthetic Tail Fin & Bronze Linkage (Option A)
    const prostheticBronzeMesh = makeSkinnedSubMesh(
      'ProstheticBronzeLinkage',
      prosthetic.bronzeHardwareGeometry,
      materials.prostheticBronzeMaterial
    );
    const prostheticIronMesh = makeSkinnedSubMesh(
      'ProstheticIronStruts',
      prosthetic.ironStrutsGeometry,
      materials.prostheticIronMaterial
    );
    const prostheticPasteMesh = makeSkinnedSubMesh(
      'ProstheticScalePasteFin',
      prosthetic.scalePasteMembraneGeometry,
      materials.prostheticPasteMaterial
    );

    const subMeshes = [
      bodySkinMesh,
      wingMembraneMesh,
      dorsalSpinesMesh,
      gumsMesh,
      teethMesh,
      tongueMesh,
      irisMesh,
      corneaMesh,
      clawsMesh,
      prostheticBronzeMesh,
      prostheticIronMesh,
      prostheticPasteMesh,
    ];

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

  const asset: ToothlessCharacterAsset = {
    rootGroup,
    rig,
    materials,
    lodGroups,
    dorsalSpineMeshes,
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
