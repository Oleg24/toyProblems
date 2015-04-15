function binarySearch(arr, target){
  var midIdx = Math.floor(arr.length / 2);
  var start = 0;
  var end = arr.length -1;
  while( arr[midIdx] !== target && start < end){
    if(target < arr[midIdx]) {
      end = midIdx-1;
    } else {
      start = midIdx+1; 
    }
    midIdx = Math.floor((start + end) / 2);
    console.log('middle idx', midIdx);
  }
  return (arr[midIdx] !== target) ? null : midIdx;
}

// find the middle index 
// set the start equal to the first index 
// set the end to be the last item in the array 
// loop until you either find  the item or start is equal to the end
  // if the target is less than the middle item, adjust the the end to be the middle index -1 
  // otherwise adjust the start to be the middle item + 1 
  // recalculate the new middle index
// for the return: if the the item in the middle doesnt equal the target return null, otherwise return the middle index   