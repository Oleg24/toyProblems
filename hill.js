// Challenge 3: Hill

// Given an array of integer elements

// Your task is to write a function that finds the minimum value X that makes possible the following: generate a new array that is sorted in strictly ascending order by increasing or decreasing each of the elements of the initial array with integer values in the [0, X] range.

// Example: Having the initial array [5, 4, 3, 2, 8] the minimum value for X is 3. 
// Decrease the first element (5) by 3, decrease the second one (4) by 1, increase the third one (3) by 1 increase the forth one (2) by 3 and do nothing to the last one (8). In the end we obtain the array [2, 3, 4, 5, 8] which is sorted in strictly ascending order.

// Note that your function will receive the following arguments:
// v
// which is the array of integers

// Data constraints
// numbers are in ascending order when arranged from the smallest to the largest number
// strictly ascending order means that each element is greater than the preceding one (e.g. [1, 2, 2, 3] is NOT strictly ascending order)
// the length of the array will not exceed 5000
// the elements of any of the arrays are integer numbers in the [1, 231 -1] range

// Efficiency constraints
// your function is expected to print the result in less than 2 seconds

// Example
// Input Output
// v: 5, 4, 3, 2, 8
// 5-3 = 2, 4 - 1 = 3, 3+1 = 4, 2+3 = 5, 8;  
// result => 3

function hill(v){
  var min = [1];
  var c = [];

  for(var i = 0; i < v.length; i++){
    c.push(v[i]);
  }
  var increasing = false;
  while(!increasing){
    console.log('array of values', min);
    for(var i = 0; i < v.length-1; i++){
      if(v[i] > v[i+1]){
        var gotSmaller = false;
        for(var j = 0; j < min.length; j++){
          if(v[i] - min[j] < v[i+1]){
            v[i] -= min[j];
            gotSmaller = true;
          }
        }
        if(!gotSmaller){
          v[i] -= min[min.length-1];
          var newVal = min[min.length-1];
          newVal+=1;
          min.push(newVal);
        }
      } else if(v[i] < v[i-1]){
        var gotLarger = false;
        for(var j = 0; j < min.length; j++){
          if(v[i] + min[j] > v[i-1]){
            v[i] += min[j];
            gotLarger = true;
          }
        }
        if(!gotLarger){
          v[i] += min[min.length-1];
          var newVal = min[min.length-1];
          newVal+=1;          
          min.push(newVal);
        }
      }
    }
    if(isIncreasing(v)){
      increasing = true;
    } else {
      v = c.slice();  
    }
  }
  console.log('min values at the end', min);
  console.log('v at the end', v);
  return min[min.length-1];
}

function isIncreasing(input){
  for(var i = 0; i < input.length -1; i++){
    if(input[i] >= input[i+1]){
      return false;
    }
  }
  return true;
}






