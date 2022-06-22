const ftoc = function(temp) {
  let ret = (temp - 32) * (5/9);
  return Number(ret.toFixed(1));
};

const ctof = function(temp) {
  let ret = (temp * (9/5)) + 32;
  return Number(ret.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
