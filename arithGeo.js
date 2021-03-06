// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 

// Arithmetic example: [2, 4, 6, 8] 
// Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function ArithGeo(arr) { 
  if(arr[1] - arr[0] === arr[arr.length-1] - arr[arr.length-2]){
    return "Arithmetic";
  } else if (arr[1] / arr[0] === arr[arr.length-1] / arr[arr.length-2]){
    return "Geometric";
  } else {
    return -1;
  }
}

function ArithGeoII(arr){
  var operation = ArithGeo(arr), check;
  if(operation === "Arithmetic"){
    checkValue = arr[1] - arr[0];
  } else if(operation === "Geometric"){
    checkValue = arr[1] / arr[0];
  } else {
    return -1;
  }
  for(var i = 1; i < arr.length - 1; i++){
    if(operation === "Arithmetic"){
      if(arr[i+1] - arr[i] !== checkValue){
        operation = -1;
        break;
      }
    } else if(operation === "Geometric"){
      if(arr[i+1] / arr[i] !== checkValue){
        operation = -1;
        break;
      }
    }
  }
  return operation;
}