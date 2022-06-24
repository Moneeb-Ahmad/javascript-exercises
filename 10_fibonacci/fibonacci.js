const fibonacci = function(n) {
  n = Number(n);
  let arr = [];
  if (n < 0) return "OOPS"
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      arr.push(1);
      continue;
    } else {
      let val = arr[i - 1] + arr[i - 2];
      arr.push(val);
    }
  }
  return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
