import fs from 'fs/promises';
import path from 'path';

const content = 'arm blood fog chest just card widely still bat stronger shake wheel theory enough clothes produce traffic reader radio summer minerals missing entirely promised';

const currentPath = path.resolve('../write.txt');

(async () => {
    try {
        await fs.appendFile(currentPath, content)
        console.log(`🎉 🎉 🎉 ` + 'Successfully');
    } catch (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
    }
})

