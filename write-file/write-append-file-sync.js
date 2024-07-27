import fs from 'fs';
import path from 'path';

const content = 'widely blew object bush remain union hour pound tide over stream wooden thumb fog wrote build accept program break bill hay white muscle therefore\n';

const currentPath = path.resolve('../write.txt');

try {
    fs.appendFileSync(currentPath, content);
    console.log(`🎉 🎉 🎉 ` + 'Successfully');
} catch (err) {
    console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
}