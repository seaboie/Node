import fs from "fs/promises";
import path from "path";

const currentFolder = path.resolve("src/components");
console.log(`🚀 🚀 🚀 ` + currentFolder);

(async () => {
    try {
        if (await fs.access(currentFolder)) {
            console.log(`🔨 🔨 🔨` + 'Directory already exists.');
        } 
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(currentFolder, {recursive: true});
            console.log(`🎉 🎉 🎉 ` + 'Successfully created directory..');
        } else {
            console.error(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        }
        
    }
})();

