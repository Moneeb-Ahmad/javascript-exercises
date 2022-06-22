const sumAll = function(num1, num2) {
  if(!(Number.isInteger(num1) && Number.isInteger(num2))) {
    return "ERROR";
  }
  else if(num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  let left = num1 < num2 ? num1 : num2;
  let right = num1 < num2 ? num2 : num1;
  let ret = 0;
  for(let i = left; i <= right; i++) {
    ret += i;
  }
  return ret;
};

// Do not edit below this line
module.exports = sumAll;
