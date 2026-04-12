// convert-images.js
// Usage: node scripts/convert-images.js
// Scans `public/images/original/` for JPG/PNG and emits optimized JPG, WebP, and AVIF into `public/images/`.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const srcDir = path.join(repoRoot, 'public', 'images', 'original');
const outDir = path.join(repoRoot, 'public', 'images');

function ensureOutDir() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
}

function findImages() {
  if (!fs.existsSync(srcDir)) return [];
  return fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));
}

async function convert(file) {
  const inPath = path.join(srcDir, file);
  const name = path.parse(file).name;
  const img = sharp(inPath);

  // Read metadata to choose sizes
  const meta = await img.metadata().catch(() => null);
  const width = meta && meta.width ? Math.min(meta.width, 1600) : 1200;

  // baseline optimized JPG
  await img
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(outDir, `${name}.jpg`));

  // webp
  await img
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, `${name}.webp`));

  // avif
  await img
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 50 })
    .toFile(path.join(outDir, `${name}.avif`));

  console.log('Converted', file, '->', `${name}.jpg|.webp|.avif`);
}

(async () => {
  ensureOutDir();
  const files = findImages();
  if (!files.length) {
    console.log('No source images found in', srcDir);
    console.log('Place originals (hero.jpg, fries1.jpg, fries2.jpg, store.jpg) in that folder and re-run.');
    return;
  }

  for (const f of files) {
    try {
      await convert(f);
    } catch (err) {
      console.error('Error converting', f, err.message || err);
    }
  }

  console.log('All done. Optimized images written to', outDir);
})();
