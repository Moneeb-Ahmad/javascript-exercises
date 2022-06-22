const reverseString = function(str) {
  let ret = [];
  for(let i = str.length-1; i >= 0; i--) {
    ret.push(str.charAt(i));
  }
  return ret.join("");
};

// Do not edit below this line
module.exports = reverseString;
