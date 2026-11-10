import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const IMAGE_DIR = ".vercel/output/static/images";

const INPUT_FORMATS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".svg",
])

const OUTPUT_FORMATS = ["png", "webp", "avif"];

async function getImages(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getImages(fullPath));
    } else if (
      entry.isFile() &&
      INPUT_FORMATS.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(inputPath) {
  const extension = path.extname(inputPath).toLowerCase();
  const parsed = path.parse(inputPath);

  for (const format of OUTPUT_FORMATS) {
    if (extension == `.${format}`) continue;

    const outputPath = path.join(
      parsed.dir,
      `${parsed.name}.${format}`
    )

    try {
      await sharp(inputPath)
        .toFormat(format)
        .toFile(outputPath);

      console.log(`Generated: ${outputPath}`);
    } catch (error) {
      console.error(`Failed: ${inputPath} -> ${format}`, error);
      throw error;
    }
  }
}

async function main() {
  try {
    await fs.access(IMAGE_DIR);
  } catch {
    console.log(`Image directory not found: ${IMAGE_DIR}`);
    return;
  }

  const images = await getImages(IMAGE_DIR);

  console.log(`Found ${images.length} images`);

  for (const image of images) {
    await optimizeImage(image);
  }

  console.log(`Image optimization completed`);
}

main().catch((error) => {
  console.error('Image optimization failed: ', error);
  process.exitCode = 1;
})