const fs = require("fs");
function writeToFile() {
  if (fs.existsSync("./text.txt")) {
    fs.writeFile("./text.txt", "Hi it me Ali", (err) => {
      if (err) {
        console.log("Sorry something went wrong");
      } else {
        console.log("Done!");
      }
    });
  }
}

fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
