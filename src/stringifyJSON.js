// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    if (obj === null) {
        return 'null';
    }
    var myString = '{';

    // Iterate through object via for in loop
    // If dealing with nested object or array, use recursive method
    for (var key in obj) {
      var val = obj[key];
      switch (typeof val) {
        case 'string': myString += '"' + key + '":"' + val + '",'; break;
        case 'number':
        case 'boolean': myString += '"' + key + '":' + val.toString() + ','; break;
        case 'object': myString += '"' + key + '":' + stringifyJSON(val) + ','; break;
        case 'function':
        case 'undefined': break;
      }

      // Once done iterating through keys, slice off comma before closing curly bracket
      // If object is empty (object solely consists of functions or undefined), don't slice
      if (Object.keys(obj).indexOf(key) === Object.keys(obj).length - 1 && myString[myString.length - 1] === ',') {
        myString = myString.slice(0, myString.length - 1);
      }
    }

    return myString + '}';
  } else if (Array.isArray(obj)) {
    var myString = '[';

    // Iterate through array via for loop
    for (var i = 0; i < obj.length; i++) {
      var item = obj[i];
      switch (typeof item) {
        case 'string': myString += '"' + item + '",'; break;
        case 'number':
        case 'boolean': myString += item.toString() + ','; break;
        case 'object': myString += stringifyJSON(item) + ','; break;
        case 'function':
        case 'undefined': break;
      }

      // Once done iterating through elements, slice off comma before closing bracket
      // If array is empty (array solely consists of functions or undefined), don't slice
      if (i === obj.length - 1 && myString[myString.length - 1] === ',') {
        myString = myString.slice(0, myString.length - 1);
      }
    }
    return myString + ']';

    // Handle cases when input is not object or array
  } else {
    switch (typeof obj) {
      case 'string': return '"' + obj + '"';
      case 'number': return obj.toString();
      case 'boolean': return obj.toString();
      case 'function':
      case 'undefined': return '';
    }
  }
}
