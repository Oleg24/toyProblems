function arrayReverse(array){
  if(array.constructor !== Array){
    return false;
  }
  var mid = Math.floor((array.length-1)/2)

  for(var i = 0; i <= mid; i++){
    swap(array, i, array.length-1-i);
  }
  return array;
}

function swap(array, x, y){
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
