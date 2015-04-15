// string to result
// give a string of inputs find the result of the string
// stringToResult("4 * 4 + 10 - 15") --> 11

  // iterate through the array and look for either multiplication or division 
  // push everything to a new array, if it is m or d: do the operation 
  // afterwards go through the array and perform secondary operations 

  // what do we not want to push?
    // multiplication & division symbol 
    // numbers that we include in the operator
function stringToResults(str){
  var inputArr = str.split(' ');
  var afterMD = [];

  for(var i = 0; i < inputArr.length; i++){
    if(inputArr[i+1] === '*' || inputArr[i+1] === "/"){
      afterMD.push(eval(inputArr[i] + inputArr[i+1] + inputArr[i+2]));
      i += 2;
    } else {
      afterMD.push(inputArr[i]);
    }
  }
  var result = eval(afterMD[0]);
  console.log(result);

  for(var j = 1; j < afterMD.length; j++){
    if(j === 1){
      console.log(result);
      console.log(afterMD[j]);
      console.log(afterMD[j+1]);
      result = eval(result + afterMD[j] + result[j+1]);
      console.log(x);
    }
    // if(parseFloat(afterMD[j])){
    //   // console.log(result);
    //   result = eval(result + afterMD[j] + afterMD[j]);
    //   afterMD.splice(j, j+2);
    //   console.log(afterMD);
    // }
  }
  console.log(afterMD);
  return result;
}

function strToNum(str){
  return eval(str);
}