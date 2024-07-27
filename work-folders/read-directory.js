import fs from 'fs';
import path from 'path';

const folderPath = path.resolve();

console.log(`🎉 🎉 🎉 ` + fs.readdirSync(folderPath, {recursive: true}));

console.log(`--------------------------------------------`);

const isFile = (fileName) => {
    return fs.lstatSync(fileName).isFile();
}

console.log(fs.readdirSync(folderPath, {recursive: true}).map((fileName) => {
    console.log(`🚀 🚀 🚀 ` + path.join(folderPath, fileName));
    return path.join(folderPath, fileName);
}).filter(isFile).join('\n'));