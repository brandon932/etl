
var o = Object.keys(abj)

function transform(obj){
  var newSet = {};
  for (var key in obj) {
     var newValue = Object.keys(obj)[0];
     for (newValue in obj){
       var set = obj[newValue];
       for (var i = 0; i < set.length; i++) {
        newSet[set[i].toLowerCase()] = parseInt(newValue);
        }
      }
    }
  return newSet;
}
