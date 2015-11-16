var transform = function(obj){
  var output = {};
  for (item in obj){
    for (var i = 0, len = obj[item].length; i < len; i++) {
      output[obj[item][i].toLowerCase()] = +item;
    }
  }
    return output;
};

module.exports = transform;
