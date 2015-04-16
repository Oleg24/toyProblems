// given an array of integers return the length of the longest increasing sub sequence

var test = [1,2,3,4,2,1,4,6,8,9]

function increasingSeq(arr){
  var longest = [];
  var currentSeq = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] <  arr[i+1]){
      currentSeq.push(arr[i]);
    } else if(longest < currentSeq){
      longest = currentSeq; 
      currentSeq = [];
    }
  }
  return longest.length;
}