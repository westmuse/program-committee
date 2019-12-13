const replace = require('replace-in-file');

const results = replace.sync({
  files: 'content/test/*.txt',
  from: [/\s+\n/g, /(\w)\n/g, /\<br\>\"/g],
  to: ['\n', '$1<br>', '"']
});


var copy = require('recursive-copy');
var replaceExt = require('replace-ext');
var fs = require('fs');


copy('content/test/', 'content/test2/', function(error, results) {
    if (error) {
        console.error('Copy failed: ' + error);
    } else {
        console.info('Copied ' + results.length + ' files');
        var path = 'content/test2/WMA2020_SP103.txt';
        var newPath = replaceExt(path, '.md');

        console.log(newPath); // /some/dir/file.coffee

        fs.rename(path, newPath, function(err) {
          if ( err ) console.log('ERROR: ' + err);
        });

    }
});
