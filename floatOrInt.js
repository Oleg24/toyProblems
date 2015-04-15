function floatOrInt(input){
  // true for int
  // false for float
  var inputStr = input.toString();
  var answer = true;
  for(var i = 0; i < inputStr.length; i++){
    if(inputStr[i] === "."){
      answer = false;
    }
  }
  return answer;
}

function isInt(n){
  return n % 1 === 0;
}