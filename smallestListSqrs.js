function smallestListSqrs(num){
  var sqrs = [];
  for(var i = num; i >= 1; i--){
    if(isSQR(i)){
      sqrs.push(i);
    }
  }

  var result;
  var currentAttempt = [];
  function recurse(num){
    if(!!result && result.length === 1){
      return;
    }
    if(num < 0){
      return;
    }
    if(num < 0 || !!result){
      if(currentAttempt.length > result.length){
        return;
      }
    }
    if(num === 0){
      if(!result){
        result = currentAttempt.slice();
        return;
      } else if(result && currentAttempt.length < result.length){
        result = currentAttempt.slice();
        return;
      }
    }
    for(var k = 0; k < sqrs.length; k++){
      currentAttempt.push(sqrs[k]);
      recurse(num - currentAttempt[currentAttempt.length-1]);
      currentAttempt.pop(currentAttempt.length-1);
    }
  }
  recurse(num);
  return result;
}


function isSQR(val){
  for(var j = 1; j <= Math.ceil(val/2); j++){
    if(val / j === j){
      return true;
    }
  }
  return false;
}