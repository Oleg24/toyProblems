// Given an input of integers 0..n determine the first missing integer
// var input = [0,1,2,4,5,6,8,10]
// missingN(input) --> 3

function missingN(start, end, input){
  var copy = input.slice();
  for(var i = start; i <= end; i++){
    copy[i] = [copy[i], i]
  }
  console.log(copy);
  for(var i = 0; i < copy.length; i++){
    console.log(copy[i][0]);
    if(copy[i][0] === undefined){
      return [i][1];
    }
  }
  return -1;
}