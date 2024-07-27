import path from 'path';

const fullPath = path.resolve('README.md');     //  /Users/krit/node/node/path/README.md
console.log(`🚀 🚀 🚀 ` + fullPath);

console.log(`--------------------------------------------`);

console.log(`🔨 🔨 🔨` + 'append directory');
const appendPath = path.resolve('temp', 'notes.txt');   //  /Users/krit/node/node/path/temp/notes.txt
console.log(`🚀 🚀 🚀 ` + appendPath);
