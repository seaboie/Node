import fs from 'fs';
import path from 'path';

fs.readFile(path.resolve('../README.md'), 'utf8', (err, data) => {      //  3.
    if (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        return;
    }
    console.log(`🚀 🚀 🚀 ` + data);
});

console.log(`--------------------------------------------`);    //  1.
console.log(`🔨 🔨 🔨` + 'Somethings');     // 2.