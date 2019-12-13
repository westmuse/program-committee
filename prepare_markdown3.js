var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var moveFrom = "content/test";
var moveTo = "content/test2"
var replaceExt = require('replace-ext');

fs.readdir(moveFrom, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function (file, index) {
    // Make one pass and make the file complete
    var fromPath = path.join(moveFrom, file);
    var toPath = replaceExt(path.join(moveTo, file), '.md');

    fs.stat(fromPath, function (error, stat) {
      if (error) {
        console.error("Error stating file.", error);
        return;
      }

      if (stat.isFile())
        console.log("'%s' is a file.", fromPath);
      else if (stat.isDirectory())
        console.log("'%s' is a directory.", fromPath);

      fs.rename(fromPath, toPath, function (error) {
        if (error) {
          console.error("File moving error.", error);
        } else {

          console.log("Moved file '%s' to '%s'.", fromPath, toPath);
        }
      });
    });
  });
});
