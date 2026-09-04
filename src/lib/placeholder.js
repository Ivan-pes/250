export const RATIO = {
  portrait: '4 / 5',
  square: '1 / 1',
  landscape: '3 / 2',
  wide: '16 / 9',
};

export function placeholder({ ratio = RATIO.portrait, tone = 0, label = '' } = {}) {
  const [rw, rh] = ratio.split('/').map((n) => parseFloat(n.trim()));
  const w = 400;
  const h = Math.round((w * rh) / rw);

  const base = 90 - (Math.abs(tone) % 3) * 3;
  const fill = `hsl(38 8% ${base}%)`;
  const mark = `hsl(38 7% ${base - 10}%)`;

  const cx = w / 2;
  const cy = h / 2 - (label ? 10 : 0);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${fill}"/>
    <g fill="none" stroke="${mark}" stroke-width="3" stroke-linejoin="round">
      <rect x="${cx - 32}" y="${cy - 20}" width="64" height="46" rx="6"/>
      <circle cx="${cx}" cy="${cy + 4}" r="13"/>
      <path d="M${cx - 13} ${cy - 20} l6 -9 h14 l6 9"/>
    </g>
    ${label ? `<text x="${cx}" y="${cy + 56}" fill="${mark}" font-family="Inter, Arial, sans-serif" font-size="15" text-anchor="middle">${label}</text>` : ''}
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace(/\s+/g, ' '))}`;
}
