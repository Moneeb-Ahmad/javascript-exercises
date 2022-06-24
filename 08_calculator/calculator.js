const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
  const ret = arr.reduce((total, value) => {
    return total + value;
  }, 0)
  return ret;
};

const multiply = function(arr) {
  const ret = arr.reduce((total, value) => {
    return total * value;
  }, 1)
  return ret;
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(n) {
  let ret = 1;
  while (n > 1) {
    ret *= n;
    n -= 1;
  }
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
