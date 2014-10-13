// create your project file to "whatever.js" for example cholo.js
// put this code in here!
 
module.exports = {
  // compact: function(){},
  // difference: function(){},
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