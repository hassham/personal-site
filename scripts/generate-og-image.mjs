import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const outPath = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1c1917" />
      <stop offset="1" stop-color="#0f1413" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect x="0" y="0" width="10" height="630" fill="#2dd4bf" />

  <rect x="96" y="96" width="72" height="72" rx="16" fill="#2dd4bf" />
  <text x="132" y="145" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#0f1413" text-anchor="middle">HA</text>

  <text x="96" y="300" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" letter-spacing="-1.5" fill="#f5f5f4">Hasham Ahmad</text>

  <text x="96" y="360" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="#a8a29e">Senior Software Engineer, 18+ years of experience</text>

  <text x="96" y="410" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="#a8a29e">Building AI-powered applications &amp; LLM workflows</text>

  <text x="96" y="540" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="24" font-weight="600" fill="#2dd4bf">hashamahmad.com</text>
</svg>
`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, buffer);
console.log(`Wrote ${outPath} (${buffer.length} bytes)`);
