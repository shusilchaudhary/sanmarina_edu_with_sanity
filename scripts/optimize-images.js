/**
 * Optimize large images in public/assets.
 * Run: node scripts/optimize-images.js
 * Requires: npm install sharp --save-dev
 */
const fs = require('fs');
const path = require('path');

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.log('Installing sharp... Run: npm install sharp --save-dev');
    process.exit(1);
  }

  const assetsDir = path.join(__dirname, '../public/assets');
  const files = fs.readdirSync(assetsDir);
  const targets = ['newyork.jpg', 'london.jpg', 'south_korea.jpg', 'office_team_01.jpg'];

  for (const file of files) {
    if (!targets.includes(file) && !/\.(jpg|jpeg|png)$/i.test(file)) continue;
    const filePath = path.join(assetsDir, file);
    const stat = fs.statSync(filePath);
    if (stat.size < 200 * 1024) continue; // Skip if already < 200KB

    const ext = path.extname(file).toLowerCase();
    const outPath = path.join(assetsDir, file.replace(/\.(jpg|jpeg|png)$/i, '_opt.webp'));

    try {
      await sharp(filePath)
        .resize(1600, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);
      const newStat = fs.statSync(outPath);
      console.log(`✓ ${file}: ${(stat.size / 1024).toFixed(0)}KB → ${path.basename(outPath)}: ${(newStat.size / 1024).toFixed(0)}KB`);
    } catch (err) {
      console.error(`✗ ${file}:`, err.message);
    }
  }

  console.log('\nDone. Update page imports to use *_opt.webp if desired.');
}

main();
