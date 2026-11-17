// Renders public/og-image.svg to public/og-image.png (1200x630) using sharp.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('../public/og-image.svg', import.meta.url));
const out = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

const info = await sharp(src, { density: 144 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(`Wrote ${out} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
