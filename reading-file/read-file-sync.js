import fs from 'fs';
import path from 'path';

try {
    const data = fs.readFileSync(path.resolve('../README.md'));
    console.log(`🚀 🚀 🚀 ` + data);
} catch (err) {
    console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
} finally {
    console.log(`🎉 🎉 🎉 ` + 'Nice');
}

// Synchronous use try-catch