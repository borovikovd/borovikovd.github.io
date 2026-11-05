import { checkerboardPath } from '../lib/poincare';

export function GET() {
  const d = checkerboardPath(7, 3, { minSize: 0.2 });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-104 -104 208 208"><circle r="102" fill="#f6f1e6"/><path d="${d}" fill="#171614"/><circle r="99" fill="none" stroke="#171614" stroke-width="7"/></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
}
