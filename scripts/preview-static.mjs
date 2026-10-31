// Serves the static export (./out) exactly like GitHub Pages does:
// the site lives under the /metaverse path prefix.
import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../out", import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const BASE = "/metaverse";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
  ".map": "application/json",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = (req.url || "/").split("?")[0];
    if (url === "/" || url === BASE) {
      res.writeHead(301, { Location: `${BASE}/` });
      return res.end();
    }
    const rel = url.startsWith(`${BASE}/`) ? url.slice(BASE.length + 1) : url.slice(1);
    const file = normalize(join(ROOT, rel));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end();
    }
    let data;
    let served = file;
    try {
      data = await readFile(file);
    } catch {
      served = join(ROOT, "index.html");
      data = await readFile(served);
    }
    res.writeHead(200, { "content-type": types[extname(served)] || "application/octet-stream" });
    res.end(data);
  } catch (err) {
    res.writeHead(500);
    res.end(String(err));
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`static preview of ${BASE} on http://0.0.0.0:${PORT}${BASE}/`);
});
