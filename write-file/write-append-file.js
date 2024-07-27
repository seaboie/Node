import fs from 'fs';
import path from 'path';

const content = 'easy whose most word recall fly offer wait percent studying express fence mine these vapor repeat material soap appropriate hope particularly storm stock sheep \n';

const currentPath = path.resolve('../write.txt');
fs.appendFile(currentPath, content, 'utf8', (err) => {
    if (err) {
        console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
        return;
    }
    console.log(`🚀 🚀 🚀 ` + 'Successfully append to ');
});