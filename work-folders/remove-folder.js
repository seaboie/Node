import fs from 'fs/promises';
import path from 'path';

const dir = path.resolve('src/comp');

(async () => {
    try {
        await fs.rm(dir, {recursive: true, force: true});
        console.log(`🎉 🎉 🎉 ` + 'Delete successfully');
    } catch (err) {
        console.error(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
    }
})();