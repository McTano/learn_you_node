var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

function printIfExt(file, ext) {
  if (path.extname(file) === ext) {
    console.log(file);
  }
}

fs.readdir( dir, function(err, files) {
  if (err) throw err;
  files.forEach( function(file) {
    printIfExt(file, ext);
  });
});