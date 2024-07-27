import { open } from "fs/promises";
import path from "path";

(async () => {
  let file;
  try {
    file = await open(path.resolve("../server.js"));
    for await (const line of file.readLines()) {
      console.log(`🚀 🚀 🚀 ` + line);
    }
  } catch (err) {
    console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
  } finally {
    if (file) await file.close();
  }
})();
