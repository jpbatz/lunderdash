var _ = require('lodash');

var array1 = [1,3,5,7,9,1,3];
var array2 = [0,2,4,6,8,4,0];
var array3 = ["a","b","c","d","e","b"];

function union() {

  var temp = [];
  console.log(arguments.length);
  for(var i=0; i<arguments.length; i++) {
    temp = temp.concat(arguments[i]);
  }

  console.log(temp.length);

  var result = [];
  for(var j=0; j<temp.length; j++) {
  // compare item in results with with each values in temp
    if(result.indexOf(temp[j]) === -1) {
      // if no match, push onto results
      result.push(temp[j]);
    } else {
      // match found, do not push item onto result array
    }
  }

  // return result array
  return result;
}

console.log(union(array1, array2, array3));