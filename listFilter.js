var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

function hasExt (file, ext) {
  return (path.extname(file) === ext)
}

  function listFilter(dir, ext) {
    return fs.readdir( dir, function(err, files) {
      var ret = []
      if (err) {
        return callback(err);
      }
      files.forEach( function(file) {
        ret.push(hasExt(file, ext));
      });
      return ret
    });
  }

module.exports = function(dir, ext) {
  return listFilter(dir, ext);
}