// console.log(process.argv);

var args = process.argv;

var arg_sum = args.slice(2).reduce(function(sum, x) {
  return sum + Number(x);
}, 0);

console.log(arg_sum);