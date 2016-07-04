var fs = require('fs');
var path = require('path');

function hasExt (file, ext) {
  return ((path.extname(file)) === '.' + ext)
}

function listFilter(dir, ext, callback) {
  return fs.readdir( dir, function(err, files) {
    if (err) {
      return callback(err);
    }
    var ret = [];
    files.forEach( function(file) {
      if (hasExt(file, ext)) {
        ret.push(file);
      }
    });
    return callback(null, ret);
  });
}



module.exports = listFilter