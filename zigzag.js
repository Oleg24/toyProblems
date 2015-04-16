// given an input of integers, return true if the input follows a zigzag pattern, false if it doesnt 

function zigZag(arr){
  var flag = true;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < arr[i+1]){
      if(arr[i+1] < arr[i+2]){
        flag = false;
        return flag;
      }
    } else if(arr[i] > arr[i+1]){
      if(arr[i+1] > arr[i+2]){
        flag = false;
        return flag;
      }
    }
  }
  return flag;
}

var testf = [3,4,5,1,2,3,7,8,9] // false

var testt = [1,3,2,4,3,6,4,7,6,7,1] // true

