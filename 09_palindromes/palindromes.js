const palindromes = function(s) {
  const regex = /^[a-z0-9]+$/i;
  s = s.trim();
  s = s.toLowerCase();
  if (s === "") {
    return true;
  }
  let left = 0;
  let right = s.length - 1;
  while (!(left >= right)) {
    if (s.charAt(left) === s.charAt(right) ||
      !s.charAt(left).match(regex) ||
      !s.charAt(right).match(regex)) {
      oldLeft = left;
      oldRight = right;
      left = !s.charAt(left).match(regex) ? left + 1 : left;
      right = !s.charAt(right).match(regex) ? right - 1 : right;
      if (oldLeft === left && oldRight === right) {
        left++;
        right--;
      }
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
