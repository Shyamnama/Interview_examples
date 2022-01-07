//File System
const fs = require("fs");

//reading files

// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

//writing files

// fs.writeFile(
//   "./assets/test2.txt",
//   "hello guys! this is edited test text file.",
//   () => {
//     console.log("File has be written");
//   }
// );

//directories

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created!!");
  });
}

//deleting files
