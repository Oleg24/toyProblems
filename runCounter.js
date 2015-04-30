function runCounter(str){
  var counter = 1, result = [], letterArray = str.split('');
  for(var i = 0; i < letterArray.length; i++){
    var letter = letterArray[i];
    if(letter !== letterArray[i-1]){
      for(var j = i+1; j < letterArray.length; j++){
        if(letter === letterArray[j]){
          counter++; 
        }
      }
      result.push(letter + ":" +counter);
      counter = 1;
    }
  }
  return result.join('');
}