// Add your functions and code here
let kittens = new Array();
destructivelyAppendKitten(name) {
  kittens.push(name);
}

destructivelyPrependKitten(name) {
  kittens.shift(name);
}