import path from 'path';

const name = 'krit';

const getPath = path.join('/', 'users', name, 'notes.txt');     //      /users/krit/notes.txt

console.log(`🚀 🚀 🚀 ` + getPath);