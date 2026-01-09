#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts PNG images to WebP format for better compression
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const QUALITY = 70; // WebP quality (0-100) - lower = smaller file
const EFFORT = 6;   // Compression effort (0-6) - higher = better compression

async function convertToWebP(inputPath) {
  const ext = extname(inputPath).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return null;
  }

  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  try {
    const inputStats = await stat(inputPath);
    
    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${savings}% smaller)`);
    return outputPath;
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await convertToWebP(fullPath);
    }
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');
  
  const args = process.argv.slice(2);
  
  // If --all flag is passed, process all images in public directory
  if (args.includes('--all')) {
    console.log('Processing all images in public directory...\n');
    await processDirectory(publicDir);
  } else {
    // Convert specific files by default
    const filesToConvert = [
      join(publicDir, 'logo.png'),
      join(publicDir, 'brands_logos', 'mapei.png'),
    ];
    
    for (const file of filesToConvert) {
      try {
        await stat(file);
        await convertToWebP(file);
      } catch {
        console.log(`⚠ Skipping ${file} (not found)`);
      }
    }
  }
  
  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
