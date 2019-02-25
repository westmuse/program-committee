var gulp         = require("gulp"),

    del          = require("del");

var cp = require('child_process');

function defaultTask(cb) {


    // Reach out to remote JSON file to get most recent WMA proposals
    gulp.task("compile_proposals", function () {

        //Delete our old css files
        del(["content/proposals-round2/**"])

  });
    gulp.task('reset', function() {
  // In gulp 4, you can return a child process to signal task completion
  return cp.execFile('node remotecontent.js');
});

// place code for your default task here
cb();
}

exports.default = defaultTask
