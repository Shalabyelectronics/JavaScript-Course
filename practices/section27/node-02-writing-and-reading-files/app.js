const fs = require("fs");
fs.writeFile("./text.txt", "Hi it me shalaby", (err) => {
  if (err) {
    console.log("Sorry something went wrong");
  } else {
    console.log("Done!");
  }
});
