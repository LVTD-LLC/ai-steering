import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const imagePath = path.join(root, 'public', 'og-image.png');
const expected = {
  width: 1200,
  height: 630,
};

const pngSignature = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const image = fs.readFileSync(imagePath);

if (image.length < 24 || !image.subarray(0, 8).equals(pngSignature)) {
  throw new Error('public/og-image.png must be a PNG image');
}

const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);

if (width !== expected.width || height !== expected.height) {
  throw new Error(
    `public/og-image.png must be ${expected.width}x${expected.height}; got ${width}x${height}`,
  );
}

console.log(`Verified public/og-image.png is ${width}x${height}`);
