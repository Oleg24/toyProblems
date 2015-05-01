// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

function SimpleMode(arr) { 
  var mode, count = 0;

  for(var i = 0; i < arr.length; i++){
    var currentNum = arr[i], currentCount = 1;
    for(var j = i+1; j < arr.length; j++){
      if(currentNum === arr[j]){
        currentCount++;
      }
    }
    if(currentCount > count){
      mode = currentNum;
      count = currentCount;
    }
  }
  if(mode !== undefined && count > 1){
    return mode;
  } else {
    return -1;
  }
}