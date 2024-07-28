import fs from 'fs';
import path from 'path';

const folderPath = path.resolve();

const getAllPaths = (dir) => {
    return fs.readdirSync(dir, { recursive: true });
}

const getFullPaths = (dir, paths) => {
    return paths.map(p => path.join(dir, p));
}

const isFile = (filePath) => {
    return fs.lstatSync(filePath).isFile();
}

const filterFiles = (paths) => {
    return paths.filter(isFile);
}

export const logPaths = (paths, separator = '\n') => {
    if (separator === '\n') {
        paths.forEach(path => {
            console.log(`🎉 🎉 🎉 ${path}`);
        });
    } else {
        console.log(`🎉 🎉 🎉 ${paths.join(separator)}`);
    }
}

// Get all paths
const allPaths = getAllPaths(folderPath);
logPaths(allPaths);

console.log('--------------------------------------------');

// Get full file paths
const fullPaths = getFullPaths(folderPath, allPaths);
const filePaths = filterFiles(fullPaths);

// Log file paths with comma separator
logPaths(filePaths, ', ');

console.log(`--------------------------------------------`);

// Log file paths with newline separator
logPaths(filePaths);