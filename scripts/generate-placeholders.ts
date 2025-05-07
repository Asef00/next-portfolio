import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';

async function generatePlaceholder(
  width: number,
  height: number,
  text: string,
  outputPath: string
) {
  const svgImage = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#2563eb"/>
      <text
        x="50%"
        y="50%"
        font-family="Arial"
        font-size="24"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
      >${text}</text>
    </svg>
  `;

  await sharp(Buffer.from(svgImage))
    .jpeg()
    .toFile(outputPath);
}

async function main() {
  // Ensure directories exist
  await mkdir('public/images/sections', { recursive: true });
  await mkdir('public/images/portfolio', { recursive: true });

  // Generate section images (16:9 ratio)
  const sections = [
    { name: 'Web Development', file: 'web-dev.jpg' },
    { name: 'Mobile Apps', file: 'mobile.jpg' },
    { name: 'UI/UX Design', file: 'design.jpg' },
  ];

  for (const section of sections) {
    await generatePlaceholder(
      1600,
      900,
      section.name,
      path.join('public/images/sections', section.file)
    );
  }

  // Generate portfolio images (4:3 ratio)
  const portfolioItems = [
    { name: 'E-commerce Platform', file: 'ecommerce.jpg' },
    { name: 'Fitness Tracking App', file: 'fitness.jpg' },
    { name: 'Dashboard Redesign', file: 'dashboard.jpg' },
  ];

  for (const item of portfolioItems) {
    await generatePlaceholder(
      1200,
      900,
      item.name,
      path.join('public/images/portfolio', item.file)
    );
  }

  console.log('Placeholder images generated successfully!');
}

main().catch(console.error); 