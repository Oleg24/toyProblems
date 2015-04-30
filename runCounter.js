function runCounter(str){
  var counter = 1, result = [], letterArray = str.split('');
  for(var i = 0; i < letterArray.length; i++){
    var letter = letterArray[i];
    console.log(letter, letterArray[i-1])
    if(letter !== letterArray[i-1]){
      for(var j = i+1; j < letterArray.length; j++){
        console.log('j', j);
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