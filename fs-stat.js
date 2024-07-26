import fs, { stat } from "fs";

const response = fs.stat("/Users/krit/node/node/README.md", (err, stat) => {    // *?                               4.
  if (err) console.log(`Oops !!! : 😖 😖 😖 Have error `, err);
  console.log("first\n" + JSON.stringify(stat, null, 2));
});

console.log("🛠️ 🛠️ 🛠️ fs-stat.js : บรรทัดที่ #8" + " " + "Response"); // *?                               1.


const responseSync = () => {    // *?                               2.
  try {
    const stat = fs.statSync("/Users/krit/node/node/README.md");
    console.log("Second\n" + JSON.stringify(stat, null, 2));
  } catch (err) {
    console.log(`Oops !!! : 😖 😖 😖 Have error `, err);
  }
};
responseSync(); // *?                               2.

console.log("🛠️ 🛠️ 🛠️ fs-stat.js : บรรทัดที่ #19" + " " + "ResponseSync"); // *?                               3.

