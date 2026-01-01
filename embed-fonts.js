import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const poppinsRegular = execSync('base64 -i /tmp/poppins-regular.woff2', { encoding: 'utf-8' }).trim();
const poppinsSemibold = execSync('base64 -i /tmp/poppins-semibold.woff2', { encoding: 'utf-8' }).trim();

const fontEmbed = `
  <defs>
    <style>
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(data:font/woff2;base64,${poppinsRegular}) format('woff2');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(data:font/woff2;base64,${poppinsSemibold}) format('woff2');
      }
    </style>
  </defs>`;

// Process thumbnail.svg
const svgContent = readFileSync('public/thumbnail.svg', 'utf-8');
const updatedSvg = svgContent.replace(
  /<defs>[\s\S]*?<\/defs>/,
  fontEmbed
);
writeFileSync('public/thumbnail.svg', updatedSvg);
console.log('Fonts embedded in thumbnail.svg');

// Process thumbnail-clean.svg
const cleanSvgContent = readFileSync('public/thumbnail-clean.svg', 'utf-8');
const updatedCleanSvg = cleanSvgContent.replace(
  /<defs>[\s\S]*?<\/defs>/,
  fontEmbed
);
writeFileSync('public/thumbnail-clean.svg', updatedCleanSvg);
console.log('Fonts embedded in thumbnail-clean.svg');






