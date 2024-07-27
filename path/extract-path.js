import path from 'path';

const fullPath = path.resolve('README.md');
console.log(`🚀 🚀 🚀 ` + path.dirname(fullPath));
console.log(`🚀 🚀 🚀 ` + path.basename(fullPath));
console.log(`🚀 🚀 🚀 ` + path.extname(fullPath));

console.log(`--------------------------------------------`);

console.log(`🔨 🔨 🔨` + 'You can get the file name without the extension by specifying a second argument');
console.log(`🚀 🚀 🚀 ` + path.basename(fullPath, path.extname(fullPath)));