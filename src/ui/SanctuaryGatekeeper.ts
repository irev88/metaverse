import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

const SEAL_STORAGE_KEY = 'our_world_sanctuary_sealed_v1';
const SEAL_COOKIE_NAME = 'our_world_sanctuary_sealed_v1';
const IDB_NAME = 'OurWorldSanctuaryGateDB';
const IDB_STORE = 'sanctuary_state';
const IDB_RECORD_KEY = 'gate_status';

declare global {
  interface Window {
    __REOPEN_OUR_WORLD__?: () => Promise<void>;
  }
}

function readCookieSealed(): boolean {
  try {
    return document.cookie
      .split(';')
      .some((part) => part.trim().startsWith(`${SEAL_COOKIE_NAME}=sealed`));
  } catch {
    return false;
  }
}

function writeCookieSealed(sealed: boolean): void {
  try {
    if (sealed) {
      document.cookie = `${SEAL_COOKIE_NAME}=sealed; max-age=315360000; path=/; SameSite=Lax`;
    } else {
      document.cookie = `${SEAL_COOKIE_NAME}=; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    }
  } catch {
    // Ignore cookie errors in restricted contexts
  }
}

function readLocalSealed(): boolean {
  try {
    return window.localStorage?.getItem(SEAL_STORAGE_KEY) === 'sealed';
  } catch {
    return false;
  }
}

function writeLocalSealed(sealed: boolean): void {
  try {
    if (sealed) {
      window.localStorage?.setItem(SEAL_STORAGE_KEY, 'sealed');
    } else {
      window.localStorage?.removeItem(SEAL_STORAGE_KEY);
    }
  } catch {
    // Ignore storage quota/privacy errors
  }
}

function openGateDB(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') {
        resolve(null);
        return;
      }
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

async function readIdbSealed(): Promise<boolean> {
  const db = await openGateDB();
  if (!db) return false;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const store = tx.objectStore(IDB_STORE);
      const getReq = store.get(IDB_RECORD_KEY);
      getReq.onsuccess = () => {
        db.close();
        resolve(getReq.result === 'sealed');
      };
      getReq.onerror = () => {
        db.close();
        resolve(false);
      };
    } catch {
      db.close();
      resolve(false);
    }
  });
}

async function writeIdbSealed(sealed: boolean): Promise<void> {
  const db = await openGateDB();
  if (!db) return;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      const store = tx.objectStore(IDB_STORE);
      if (sealed) {
        store.put('sealed', IDB_RECORD_KEY);
      } else {
        store.delete(IDB_RECORD_KEY);
      }
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        resolve();
      };
    } catch {
      db.close();
      resolve();
    }
  });
}

export async function clearAllSanctuaryLocks(): Promise<void> {
  writeLocalSealed(false);
  writeCookieSealed(false);
  await writeIdbSealed(false);
}

export async function persistSanctuarySeal(): Promise<void> {
  writeLocalSealed(true);
  writeCookieSealed(true);
  await writeIdbSealed(true);
}

function installOwnerUnlockHooks(): void {
  // Programmatic owner reset hook
  window.__REOPEN_OUR_WORLD__ = async () => {
    await clearAllSanctuaryLocks();
    window.location.replace(window.location.pathname);
  };

  // Invisible owner-only chord (hold Alt+Shift and type "OPEN") — zero UI indication to visitors
  let buffer = '';
  window.addEventListener('keydown', (e) => {
    if (!e.altKey || !e.shiftKey) {
      buffer = '';
      return;
    }
    if (e.key && e.key.length === 1) {
      buffer = (buffer + e.key.toUpperCase()).slice(-4);
      if (buffer === 'OPEN') {
        buffer = '';
        void clearAllSanctuaryLocks().then(() => {
          window.location.replace(window.location.pathname);
        });
      }
    }
  });
}

function checkUrlOwnerUnlock(): boolean {
  try {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();
    const isUnlock =
      params.get('owner') === 'reopen' ||
      params.get('unlock') === 'our-world' ||
      hash === '#owner-reopen' ||
      hash === '#reopen-our-world';
    if (isUnlock) {
      window.history.replaceState({}, document.title, window.location.pathname);
      return true;
    }
  } catch {
    // Ignore URL parse errors
  }
  return false;
}

export function renderSealedSanctuaryScreen(): void {
  installOwnerUnlockHooks();
  window.__stopLoadingAmbient?.();

  const curtain = document.getElementById('loading-curtain');
  if (curtain) curtain.remove();

  const canvasContainer = document.getElementById('canvas-container');
  if (canvasContainer) canvasContainer.innerHTML = '';

  const hudRoot = document.getElementById('hud-root');
  if (hudRoot) hudRoot.innerHTML = '';

  let sealedEl = document.getElementById('sanctuary-sealed-screen');
  if (!sealedEl) {
    sealedEl = document.createElement('div');
    sealedEl.id = 'sanctuary-sealed-screen';
    sealedEl.className = 'ux-sealed-sanctuary';
    sealedEl.setAttribute('aria-label', 'World Closed');
    sealedEl.innerHTML = `
      <div class="ux-sealed-core">
        <svg class="ux-sealed-emblem" viewBox="0 0 120 120" fill="none" aria-hidden="true">
          <path
            d="M60 92 C44 80, 24 66, 24 46 C24 34, 34 26, 45 26 C52 26, 57 30, 60 35 C63 30, 68 26, 75 26 C86 26, 96 34, 96 46 C96 66, 76 80, 60 92 Z"
            stroke="rgba(190, 182, 198, 0.18)"
            stroke-width="1.15"
            stroke-dasharray="4 5"
          />
        </svg>
        <div class="ux-sealed-caption">This world has drifted beyond reach.</div>
      </div>
    `;
    document.body.appendChild(sealedEl);
  }
}

/**
 * Runs at the start of User Interface bootstrap BEFORE WebGL initializes.
 * Returns `true` if the world is sealed and execution must halt immediately.
 */
export async function checkSanctuarySealedOnBoot(): Promise<boolean> {
  installOwnerUnlockHooks();

  if (checkUrlOwnerUnlock()) {
    await clearAllSanctuaryLocks();
    return false;
  }

  const syncSealed = readLocalSealed() || readCookieSealed();
  const idbSealed = await readIdbSealed();

  if (syncSealed || idbSealed) {
    // Self-heal all three stores so clearing a single store cannot bypass the lock
    await persistSanctuarySeal();
    renderSealedSanctuaryScreen();
    return true;
  }

  return false;
}

/**
 * Permanently shuts down the 3D WebGL world, disposes GPU resources, locks the User Interface,
 * and transitions into the non-interactive Sealed Sanctuary screen.
 */
export async function executePermanentSanctuaryShutdown(options: {
  stopRenderLoop: () => void;
  muteAudio: () => void;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
}): Promise<void> {
  await persistSanctuarySeal();
  options.muteAudio();
  options.stopRenderLoop();

  try {
    options.scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) {
        mesh.geometry.dispose();
      }
      if (mesh.material) {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const m of mats) {
          const rec = m as unknown as Record<string, unknown>;
          for (const k of Object.keys(rec)) {
            const val = rec[k];
            if (val instanceof THREE.Texture) {
              val.dispose();
            }
          }
          m.dispose();
        }
      }
    });
    options.scene.clear();
    options.composer.renderTarget1.dispose();
    options.composer.renderTarget2.dispose();
    options.renderer.dispose();
    options.renderer.forceContextLoss();
    options.renderer.domElement.remove();
  } catch {
    // Ensure clean UI shutdown even if driver context was already lost
  }

  renderSealedSanctuaryScreen();
}
