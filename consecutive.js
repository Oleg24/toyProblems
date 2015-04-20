// Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements. 

function Consecutive(arr) { 
  var inc = 0;
  arr = arr.sort(function(a,b){ return a > b});
  for(var i = arr[0]; i < arr[arr.length-1]; i++){
    inc++;
    console.log(inc);
  }
  var ints = arr.length - 1;
  return inc - ints;  
}

// Input = 5,10,15 Output = 8
// 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 --> 8 not counting 5, 10, 15
// Input = -2,10,4 Output = 10
// -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 // 10 not counting -2, 10, 4 

// iterate from lowest to highest
// increase the iterator
// subtract remaining numbers between two extremes