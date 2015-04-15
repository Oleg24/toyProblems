// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

var snail = function(array) {
  

  function iterateAndDelete(array, snailSort) {
    snailSort = snailSort || [];

    if(array.length === 1){
      if(array[0].length === 0){
        return [];
      } else if(array[0].length === 1) {
        return array[0];
      }
    } 
 

    // come up with BASE CASE HERE 
    if(array.length === 1){
      snailSort = snailSort.concat(array);
      return snailSort;
    }

    if(array.length === 2){
      snailSort = snailSort.concat(array[0]);
      snailSort = snailSort.concat(array[1].reverse());
      return snailSort;
    }
    var length = array[0].length;
    
    var topRow = array.splice(0,1);
    length--;

    
    var lastColumn = [];
    for(var i = 0; i < length; i++){
      var lastElement = array[i].splice(array[i].length-1); 
      lastColumn = lastColumn.concat(lastElement);
    }

    var bottomRow = array[array.length-1].reverse().splice(0);
    length--;


    var firstColumn = [];
    for(var i = array.length - 1; i >= 0; i-- ){
      var firstElem = array[i].splice(0,1);
      firstColumn.push(firstElem); 
    }

    snailSort = snailSort.concat(topRow[0]);
    snailSort = snailSort.concat(lastColumn);
    snailSort = snailSort.concat(bottomRow);
    snailSort = snailSort.concat(firstColumn[0]);

    return iterateAndDelete(array, snailSort);
  }

  return iterateAndDelete(array);
}



 [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13], instead got: 
 [1,2,3,4,5,10,15,20,25,24,23,22,21,16,7,8,9,14,19,12,13,null,17,18]


var arr = [[1,2,3,4,5],
          [6,7,8,9,10],
          [11,12,13,14,15],
          [16,17,18,19,20],
          [21,22,23,24,25]]











