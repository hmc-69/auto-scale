import fs from 'fs';
import path from 'path';

const svgDir = path.join(process.cwd(), 'SVGs');
const outDir = path.join(process.cwd(), 'src', 'components', 'ui');
const outFile = path.join(outDir, 'Icons.tsx');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));

let output = `import React from 'react';\n\n`;
output += `export type IconProps = React.SVGProps<SVGSVGElement>;\n\n`;

for (const file of files) {
  const componentName = file
    .replace('.svg', '')
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  let content = fs.readFileSync(path.join(svgDir, file), 'utf-8');
  
  // Convert basic attributes to camelCase
  content = content
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/width="[0-9]+"/, '') // Remove fixed width
    .replace(/height="[0-9]+"/, ''); // Remove fixed height
  
  // Convert standard attributes like xmlns and replace with spread operator
  content = content.replace(/<svg[^>]*>/, '<svg {...props} width="1em" height="1em">');
  
  // We should also replace the stroke and fill if they are hardcoded
  // Wait, let's keep it simple: just pass props.
  // Actually, we should replace fill="#000000" with fill="currentColor" etc.
  content = content.replace(/fill="#[0-9A-Fa-f]{6}"/g, 'fill="currentColor"');
  content = content.replace(/stroke="#[0-9A-Fa-f]{6}"/g, 'stroke="currentColor"');
  
  output += `export const ${componentName}Icon = (props: IconProps) => (\n  ${content}\n);\n\n`;
}

fs.writeFileSync(outFile, output);
console.log('Icons generated successfully.');
