import path from 'path';

const fullPath = path.resolve('README.md');
console.log(`🚀 🚀 🚀 ` + path.dirname(fullPath));      //      /Users/krit/node/node/path
console.log(`🚀 🚀 🚀 ` + path.basename(fullPath));     //      README.md
console.log(`🚀 🚀 🚀 ` + path.extname(fullPath));      //      .md

console.log(`--------------------------------------------`);

console.log(`🔨 🔨 🔨` + 'You can get the file name without the extension by specifying a second argument');
console.log(`🚀 🚀 🚀 ` + path.basename(fullPath, path.extname(fullPath)));