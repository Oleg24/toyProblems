// given an array of integers determine the number can make the sequence strictly increasing.  

// example increasingInt([2,2,2]) --> 1  2-1, 2, 2+1 [1,2,3];
// example increasingInt([1,1,2]) --> 1  1, 1+1, 2+1 [1,2,3];

function increasingInt(inputArray){
  var possibleInts = [];
  var input = inputArray.sort(function(a,b){ return a > b});
  for(var i = 1; i < input[input.length-1]; i++){
    possibleInts.push(i);
  }
  for(var i = 0; i < possibleInts.length; i++){
    var currentInt = possibleInts[i];
    for(var j = 0; j < inputArray.length-1; j++){
      if(inputArray[j] === inputArray[j+1]){
        if(inputArray[j+1] + currentInt > inputArray[j]){
          inputArray[j+1] = inputArray[j+1] + currentInt; 
        } else {
          inputArray[j] = inputArray[j] - currentInt;
        }
      } // other else 
    }
  }
    
}


//  Build a function that checks if the values are increasing

function isIncreasing(input){
  for(var i = 0; i < input.length -1; i++){
    if(input[i] >= input[i+1]){
      return false;
    }
  }
  return true;
}

//  Write an identity function, using continuation-passing style.

function identity(arg, callback){
  callback(arg);
}


// Write a factorial function in JavaScript, using continuation-passing style.
// 4! --> 4*3*2*1 = 24

function factorial(n, res){
  var res = res || 1;
  if(n === 1){
    return res*n;
  } else {
    res *= n;
    return factorial(n-1, res);
  }
}

function factorial(n){
  if(n === 1){ return 1;}
  return n * factorial(n - 1);
}

// CPS STYLE 

function factorial(n, accumulate){  
  if(n === 0) {
    accumulate(1); 
    return;
  }
  factorial(n-1, function(k) {accumulate(n * k);}); 
}







