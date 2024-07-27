import fs from "fs/promises";
import path from "path";

const content =
  "Before : writing throughout jar kill leave daily needed extra desk younger orbit faster indicate pick sure beneath stage settlers feature build distance split terrible lot\n";

const currentPath = path.resolve("../write.txt");

(async () => {
  try {
    await fs.writeFile(currentPath, content, {flag: 'a+'});
    console.log(`🎉 🎉 🎉 ` + 'Successfully');
  } catch (err) {
    console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
  }
})();
