// find the list of perfect squares that end up to the number that we pass in

function perfectSquareSum(number){

}

function isPerfectSquare(num){
  var answer = false;
  for(var i = 2; i <= Math.floor(num/2); i++){
    if(num / i === i){
      answer = true;
    } if (answer === true){
      return answer;
    }
  }
  return answer;
}