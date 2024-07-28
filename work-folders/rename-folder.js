import fs from 'fs';

const target = 'src/comp';
const destination = 'src/components';

fs.rename(target, destination, err => {
    if (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        if (err.code === 'ENOENT') {
            fs.mkdirSync(target, {recursive: true});
            console.log('Nice: Create new folder');
        } else {
            console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        }
        return;
    }
    console.log(`🚀 🚀 🚀 ` + 'Successully Rename');
})
