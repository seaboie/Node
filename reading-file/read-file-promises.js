import fs from "fs/promises";
import path from "path";

const example = async () => {
  try {
    const data = await fs.readFile(path.resolve("../README.md"), "utf8");
    console.log(`🚀 🚀 🚀 ` + data);
  } catch (err) {
    console.log(`🔥 🔥 🔥 🔥 🔥 Oops !!! : Have error `, err);
  }
};

await example();
