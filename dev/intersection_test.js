// Arrays: intersection

// sample arrays
var array1 = [];
var array2 = [3,2,1];
var array3 = [5,2,1,4];
var array4 = [2,1];
var array5 = ["e","a","f","c","d","b"];

var result = [];
// use strict comparison === and result is in order of arguments, not sorted
// similar to Lo-Dash version
function intersection() {
  
  var result = [];                        // what if argument is not an array?  can use isArray() to test

  if(arguments.length === 0) {            // no arguments provided, return 0 
    result = 0;
  } else if(arguments.length === 1) {     // single array provided, return the argument
    result = arguments[0];
  } else if(arguments.length > 1) {       // multiple arguments provided
    // consider empty array
console.log("number of arguments: " + arguments.length);

    var curr = [];
    var next = [];
    
    // make length-1 array comparisons
    for(var i=0; i<arguments.length-1; i++) {

console.log("_comparison_: " + (i+1));
console.log("curr array: " + arguments[i]);
console.log("next array: " + arguments[i+1]);

      for(var j=0; j<arguments[i].length; j++) {
console.log("iteration: " + j);
        // adjust pointers to arrays
console.log("curr value: " + arguments[i][j]);
//console.log("next value: " + arguments[i+1][j]);
        // if curr array item matches item in next array, store in result arraY, if not already in result array
console.log("element to find: " + arguments[i][j]);
console.log("in array: " + arguments[i+1]);
console.log(Array.isArray(arguments[i+1]));
var index = arguments[i+1].indexOf(arguments[i][j]);
console.log(arguments[i+1].indexOf(arguments[i][j]));

        if( arguments[i+1].indexOf(arguments[i][j]) >= 0 ) {
console.log("MATCH FOUND");
          if(result.indexOf(arguments[i][j]) < 0) {
            result.push(arguments[i][j]);
          } else {
            console.log("Already in result array")
          }
        } else {
console.log("MATCH NOT FOUND");    
        }
      }
      // curr = arguments[i];
      // next = arguments[i+1];
    }
  
  }
  
  return result;
}

console.log(intersection());                        // test no argument
console.log(intersection(array1));                  // test one argument
console.log(intersection(array2,array3));           // test more than one argument
console.log(intersection(array1,array2,array3,array4,array5));    // test more than two arguments, diff types