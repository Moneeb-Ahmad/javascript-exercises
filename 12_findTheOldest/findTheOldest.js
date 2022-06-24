const findTheOldest = function(arr) {
  let oldest = arr.reduce((lastGuy, nextGuy) => {
    let key = 'yearOfDeath';
    if (!(key in lastGuy)) {
      lastGuy[key] = (new Date()).getFullYear();
    }
    if (!(key in nextGuy)) {
      nextGuy[key] = (new Date()).getFullYear();
    }
    if ((lastGuy.yearOfDeath - lastGuy.yearOfBirth) >
      (nextGuy.yearOfDeath - nextGuy.yearOfBirth)) {
      return lastGuy;
    } else {
      return nextGuy;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
