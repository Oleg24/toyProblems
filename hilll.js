function getDeviation(array){
  // array is an array of integers
  // return the min x to get strictly increasing array
  var x = 0;
  function check(dev){
    // returns true if dev results in strictly increasing
    // initialize attempt with the first value at its lowest possible value
    var attempt = [array[0]-dev];  
    for( var i=1; i< array.length; i++){
      // check current element against previous element
      // maintain attempt array of increasing values

      // if element is greater than previous
        // subtract dev from element, but keep element greater than prev
      // else if element is equal to previous
        // add one to element
      // else if element is less than previous
        // see if it can be increased within dev so it is greater than previous
          // if no, return false

            if (array[i] > attempt[i - 1]) {
                if (array[i] - dev > attempt[i - 1]) {
                    attempt.push(array[i] - dev)
                } else if (array[i] - dev <= attempt[i - 1]) {
                    attempt.push(attempt[i - 1] + 1)
                }
            } else if (array[i] === attempt[i - 1]) {
                attempt.push(array[i]+1)
            } else if (array[i] < attempt[i-1] ){
                if(array[i] + dev > attempt[i-1]){
                    attempt.push(attempt[i-1]+1)
                } else {
                    return false
                }
            }
    }
    return true
  }
  while ( check(x) === false ){
    x++;
  }
  return x

}