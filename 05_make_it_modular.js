var listFilter = require('./listFilter');

var dir = process.argv[2];
var ext = process.argv[3];

var result = listFilter(dir, ext);

console.log(result);