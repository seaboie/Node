import fs from 'fs';
import path from 'path';


const currentDirectoryPath = path.resolve();

const readAllPaths = (dir) => {

    try {
        return fs.readdirSync(dir, {recursive: true});
    } catch (err) {
        console.error(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
    }
};

console.log(`1. 🚀 🚀 🚀 \n` + readAllPaths(currentDirectoryPath).join('\n'));

console.log(`--------------------------------------------`);

const getFullPaths = (dir, paths) => {
    return paths.map(p => path.join(dir, p));
};

const isFile = (filePath) => {
    return fs.lstatSync(filePath).isFile();
};

const filterFiles = (paths) => {
    return paths.filter(isFile);
}

const logPaths = (paths, separator = '\n') => {
    if (separator === '\n') {
        paths.map(p => {
            console.log(`🎉 🎉 🎉 ` + p);
            return p;
        });
    } else {
        console.log(`🎉 🎉 🎉 ` + paths.join(separator));
    }
};

// Get all paths
const allPaths = readAllPaths(currentDirectoryPath);
logPaths(allPaths);

console.log(`--------------------------------------------`);

// Get full file paths
const fullPaths = getFullPaths(currentDirectoryPath, allPaths);
const filePaths = filterFiles(fullPaths);

logPaths(filePaths);

console.log(`--------------------------------------------`);

