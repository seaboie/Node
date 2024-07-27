import fs from "fs";
import path from "path";

const content =
  "writing throughout jar kill leave daily needed extra desk younger orbit faster indicate pick sure beneath stage settlers feature build distance split terrible lot";

const currentPath = path.resolve('../write.txt');

try {
  fs.writeFileSync(currentPath, content);
  console.log(`🚀 🚀 🚀 ` + "Successfully " + currentPath);
} catch (err) {
  console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
}
