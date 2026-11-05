// Hyperbolic {p,q} tilings of the Poincaré disk, computed at build time.
// The tiling grows by reflecting a regular p-gon across its edges; each tile is
// split into 2p triangles and coloured like a checkerboard.

type Pt = [number, number];
type Geodesic = { line: Pt } | { c: Pt; r: number };
interface Tile {
  center: Pt;
  verts: Pt[];
  mids: Pt[];
  parity: number;
}

const len2 = (z: Pt) => z[0] * z[0] + z[1] * z[1];

function circumcircle(a: Pt, b: Pt, c: Pt) {
  const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  const x = (len2(a) * (b[1] - c[1]) + len2(b) * (c[1] - a[1]) + len2(c) * (a[1] - b[1])) / d;
  const y = (len2(a) * (c[0] - b[0]) + len2(b) * (a[0] - c[0]) + len2(c) * (b[0] - a[0])) / d;
  return { c: [x, y] as Pt, r: Math.hypot(a[0] - x, a[1] - y) };
}

// The hyperbolic line through a and b: a diameter, or a circle orthogonal to the rim.
function geodesic(a: Pt, b: Pt): Geodesic {
  const p = len2(a) > len2(b) ? a : b;
  if (Math.abs(a[0] * b[1] - a[1] * b[0]) < 1e-12) {
    const n = Math.sqrt(len2(p));
    return { line: [p[0] / n, p[1] / n] };
  }
  return circumcircle(a, b, [p[0] / len2(p), p[1] / len2(p)]);
}

function reflect(z: Pt, g: Geodesic): Pt {
  if ('line' in g) {
    const k = 2 * (z[0] * g.line[0] + z[1] * g.line[1]);
    return [k * g.line[0] - z[0], k * g.line[1] - z[1]];
  }
  const dx = z[0] - g.c[0], dy = z[1] - g.c[1];
  const m = (g.r * g.r) / (dx * dx + dy * dy);
  return [g.c[0] + dx * m, g.c[1] + dy * m];
}

function tiling(p: number, q: number, minSize: number): Tile[] {
  const R = Math.acosh(1 / (Math.tan(Math.PI / p) * Math.tan(Math.PI / q)));
  const rIn = Math.acosh(Math.cos(Math.PI / q) / Math.sin(Math.PI / p));
  const rv = Math.tanh(R / 2), rm = Math.tanh(rIn / 2);
  const at = (r: number, k: number): Pt => {
    const a = -Math.PI / 2 + (2 * Math.PI * k) / p;
    return [r * Math.cos(a), r * Math.sin(a)];
  };
  const tiles: Tile[] = [{
    center: [0, 0],
    verts: Array.from({ length: p }, (_, k) => at(rv, k)),
    mids: Array.from({ length: p }, (_, k) => at(rm, k + 0.5)),
    parity: 0,
  }];
  const key = (z: Pt) => `${Math.round(z[0] * 1e5)},${Math.round(z[1] * 1e5)}`;
  const seen = new Set([key(tiles[0].center)]);

  for (let i = 0; i < tiles.length; i++) {
    const t = tiles[i];
    for (let k = 0; k < p; k++) {
      const g = geodesic(t.verts[k], t.verts[(k + 1) % p]);
      const center = reflect(t.center, g);
      const id = key(center);
      if (seen.has(id)) continue;
      const verts = t.verts.map((v) => reflect(v, g));
      if (Math.hypot(verts[0][0] - center[0], verts[0][1] - center[1]) < minSize) continue;
      seen.add(id);
      tiles.push({ center, verts, mids: t.mids.map((m) => reflect(m, g)), parity: 1 - t.parity });
    }
  }
  return tiles;
}

/** SVG path data for one colour of the (2,p,q) triangle checkerboard, on a disk of radius `scale`. */
export function checkerboardPath(p: number, q: number, { scale = 100, minSize = 0.02 } = {}): string {
  const f = (n: number) => +(n * scale).toFixed(1);
  const arcTo = (a: Pt, b: Pt) => {
    const g = geodesic(a, b);
    if ('line' in g) return `L${f(b[0])} ${f(b[1])}`;
    const cross = (a[0] - g.c[0]) * (b[1] - g.c[1]) - (a[1] - g.c[1]) * (b[0] - g.c[0]);
    return `A${f(g.r)} ${f(g.r)} 0 0 ${cross > 0 ? 1 : 0} ${f(b[0])} ${f(b[1])}`;
  };
  const tri = (a: Pt, b: Pt, c: Pt) => `M${f(a[0])} ${f(a[1])}${arcTo(a, b)}${arcTo(b, c)}${arcTo(c, a)}Z`;

  let d = '';
  for (const t of tiling(p, q, minSize)) {
    for (let k = 0; k < p; k++) {
      const v0 = t.verts[k], v1 = t.verts[(k + 1) % p], m = t.mids[k];
      d += t.parity ? tri(t.center, v0, m) : tri(t.center, m, v1);
    }
  }
  return d;
}
