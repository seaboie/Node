import fs from 'fs';
import path from 'path';

const content = 'writing throughout jar kill leave daily needed extra desk younger orbit faster indicate pick sure beneath stage settlers feature build distance split terrible lot\n';
fs.writeFile(path.resolve('../write.txt'), content, 'utf8', (err) => {
    if (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        return;
    }
    console.log(`🚀 🚀 🚀 ` + 'Write file successfully');
})