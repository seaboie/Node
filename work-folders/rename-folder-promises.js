import fs from 'fs/promises';

const target = 'src/component';
const destination = 'src/components';

(async () => {
    try {
        await fs.rename(target, destination);
        console.log(`🚀 🚀 🚀 ` + 'Successfully Rename');
    } catch (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        
        if (err.code === 'ENOENT') {
            console.log(`🔨 🔨 🔨` + 'No such file or directory');
            try {
                fs.mkdir(target, { recursive: true });
                console.log(`🚀 🚀 🚀 ` + 'Success create new folder');
            } catch (err) {
                console.error(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
            }
        }
        
    }
})();