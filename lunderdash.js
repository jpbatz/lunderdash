// create your project file to "whatever.js" for example cholo.js
// put this code in here!
 
module.exports = {
  compact: function(array) {
    if (array instanceof Array) {
      var filteredArray = [];
      var current;
      for (var i = 0; i < array.length; i++) {
        current = array[i];
        if (isNaN(current)) {
            continue;
        }
        switch(current) {
          case 0:
          case false:
          case '':
          case null:
          case undefined:
            continue;
          default:
            filteredArray.push(current);
        }
      }
      return filteredArray;
    } else {
      return [];
    }
  },
  difference: function(array, exclusions) {
    if (array instanceof Array) {
      if (exclusions instanceof Array) {
        var excludeIndex;
        var excludeValue;
        for (var i = 0; i < exclusions.length; i++) {
          excludeValue = exclusions[i];
          do {
            excludeIndex = array.indexOf(excludeValue);
            if (excludeIndex > -1) {
              array.splice(excludeIndex, 1);
            }
          } while (excludeIndex > -1);
        } // end for
      } // end if exclusions is an Array
      return array;
    } else { // array is not an Array
      return [];
    }
  },
  findIndex: function(array, callback) {

  },
  findLastIndex: function() {

  },
  first: function() {

  },
  flatten: function() {

  },
  union: function() {
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
      }
    }

    // return result array
    return result;
  },
  
  //etc...
  test: function(){
    console.log("test! rename this file to your project name");
  }
};