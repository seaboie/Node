import fs from 'fs';

const target = 'src/comp';
const destination = 'src/components';

try {
    fs.renameSync(target, destination);
    console.log(`🎉 🎉 🎉 ` + 'Successully Rename');
} catch (err) {
    if (err.code === 'ENOENT') {
        try {
            fs.mkdirSync(target, {recursive: true});
            console.log(`🚀 🚀 🚀 ` + 'Successfully create new folder');
        } catch (err) {
            console.error(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error make directory `, err);
        }
    }
    console.log(`🚀 🚀 🚀 ` + 'Successully ');
}