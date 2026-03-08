const fs = require('fs');
const path = require('path');

// Simple file copy as fallback since compression tools aren't available
const sourcePath = path.join(__dirname, 'public/assets/japan_01.jpg');
const targetPath = path.join(__dirname, 'public/assets/japan_01_compressed.jpg');

try {
  fs.copyFileSync(sourcePath, targetPath);
  console.log('Image copied successfully');
} catch (error) {
  console.error('Error copying image:', error);
}
