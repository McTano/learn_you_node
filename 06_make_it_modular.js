var listFilter = require('./listFilter');

var dir = process.argv[2];
var ext = process.argv[3];

listFilter(dir, ext, function(err, filtered_list) {
  if (err) {
    throw err;
  }
  filtered_list.forEach(function(file) {
  console.log(file);
  });
});