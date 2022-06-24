const getTheTitles = function(obj) {
  let ret = [];
  for (let i = 0; i < obj.length; i++) {
    ret.push(obj[i]["title"]);
  }
  return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
