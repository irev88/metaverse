import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { ToothlessCharacterAsset } from '../character/ToothlessAsset';
import { LightFuryCharacterAsset } from '../character/lightfury/LightFuryAsset';
import { LODLevel } from '../character/geometry/BodyAndHeadBuilder';

export type ExportableDragonAsset = ToothlessCharacterAsset | LightFuryCharacterAsset;

async function exportObject3DToGLB(
  target: THREE.Object3D,
  filename: string
): Promise<{ filename: string; sizeMB: number }> {
  const exporter = new GLTFExporter();
  target.updateMatrixWorld(true);

  const hiddenHelpers: THREE.Object3D[] = [];
  target.traverse((obj) => {
    if (obj.userData?.excludeFromExport && obj.visible) {
      obj.visible = false;
      hiddenHelpers.push(obj);
    }
  });

  let buffer: ArrayBuffer;
  try {
    buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      exporter.parse(
        target,
        (result) => {
          if (result instanceof ArrayBuffer) {
            resolve(result);
          } else {
            reject(new Error('Expected binary ArrayBuffer from GLTFExporter'));
          }
        },
        (err) => reject(err),
        {
          binary: true,
          onlyVisible: true,
          maxTextureSize: 1024,
        }
      );
    });
  } finally {
    for (const h of hiddenHelpers) {
      h.visible = true;
    }
  }

  const blob = new Blob([buffer], { type: 'model/gltf-binary' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);

  return {
    filename,
    sizeMB: buffer.byteLength / (1024 * 1024),
  };
}

export async function exportDragonAsGLB(
  asset: ExportableDragonAsset,
  slugPrefix: string,
  lod: LODLevel = asset.activeLOD
): Promise<{ filename: string; sizeMB: number }> {
  const prevLOD = asset.activeLOD;
  const prevAuto = asset.autoLOD;

  asset.autoLOD = false;
  asset.setActiveLOD(lod);
  try {
    return await exportObject3DToGLB(asset.rootGroup, `${slugPrefix}-lod${lod}.glb`);
  } finally {
    asset.setActiveLOD(prevLOD);
    asset.autoLOD = prevAuto;
  }
}

export async function exportToothlessAsGLB(
  asset: ToothlessCharacterAsset,
  lod: LODLevel = asset.activeLOD
): Promise<{ filename: string; sizeMB: number }> {
  return exportDragonAsGLB(asset, 'toothless-hidden-world', lod);
}

export async function exportLightFuryAsGLB(
  asset: LightFuryCharacterAsset,
  lod: LODLevel = asset.activeLOD
): Promise<{ filename: string; sizeMB: number }> {
  return exportDragonAsGLB(asset, 'light-fury-hidden-world', lod);
}
