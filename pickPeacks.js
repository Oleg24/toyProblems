// In this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

function pickPeaks(arr){
  var peaks = { pos: [], peaks: []};

  for(var i = 1; i < arr.length - 2; i++){
    var currentHeight = arr[i];
    if(currentHeight > arr[i+1] && i === 1){
      peaks.pos.push(i);
      peaks.peaks.push(arr[i]);
    } else if(currentHeight < arr[i+1]){
      currentHeight = arr[i+1];
      for(var j = i+2; j < arr.length; j++){
        if(currentHeight < arr[j]){
          currentHeight = arr[j];
        } else {
          peaks.pos.push(j-1);
          peaks.peaks.push(arr[j-1]);
          i = j-1;
          break;
        }
      }
    } else if(currentHeight === arr[i+1]){
      for(var j = i; j < arr.length; j++){
        if(currentHeight > arr[j]){
          peaks.pos.push(i);
          peaks.peaks.push(currentHeight);
          i = j-1;
          break;
        } else if(currentHeight < arr[j]){
          currentHeight = arr[j];
          for(var k = j; k < arr.length; k++){
            if(currentHeight < arr[k]){
              currentHeight = arr[k];
            } else {
              peaks.pos.push(k);
              peaks.peaks.push(arr[k]);
              i = k;
              break;
            }
          }
          break;
        }
      }
    } 
  }
  return peaks;
}



/////////
// In this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

function pickPeaks(arr){
  var peaks = { pos: [], peaks: []};

  for(var i = 1; i < arr.length - 1; i++){
    var currentHeight = arr[i];
    if(currentHeight < arr[i+1]){
      currentHeight = arr[i+1];
      for(var j = i+2; j < arr.length; j++){
        if(currentHeight < arr[j]){
          currentHeight = arr[j];
        } else {
          peaks.pos.push(j-1);
          peaks.peaks.push(arr[j-1]);
          i = j;
          break;
        }
      }
    } else if(currentHeight === arr[i+1]){
      for(var j = i; j < arr.length; j++){
        if(currentHeight > arr[j]){
          peaks.pos.push(i);
          peaks.peaks.push(currentHeight);
          i = j;
          break;
        } else if(currentHeight < arr[j]){
          currentHeight = arr[j];
          i = j;
          break;
        }
      }
    } 
  }
  return peaks;
}

// In this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

function pickPeaks(arr){
  var peaks = { pos: [], peaks: []};

  for(var i = 1; i < arr.length - 1; i++){
    var currentHeight = arr[i];
    if(currentHeight < arr[i+1]){
      currentHeight = arr[i+1];
      for(var j = i+2; j < arr.length; j++){
        if(currentHeight < arr[j]){
          currentHeight = arr[j];
        } else {
          peaks.pos.push(j-1);
          peaks.peaks.push(arr[j-1]);
          i = j;
          break;
        }
      }
    } else if(currentHeight === arr[i+1]){
      for(var j = i; j < arr.length; j++){
        if(currentHeight > arr[j]){
          peaks.pos.push(i);
          peaks.peaks.push(currentHeight);
          i = j;
          break;
        } else if(currentHeight < arr[j]){
          currentHeight = arr[j];
          i = j-1;
          break;
        }
      }
    } 
  }
  return peaks;
}