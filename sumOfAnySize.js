// give an input of any size calculate the sum of all the numbers greater than 0;

function sum(){
  var args = arguments;
  var sum = 0;
  console.log(args);
  Array.prototype.forEach.call(args, function(number){
    if(greaterThanZero(number)){
      sum += number;
    }
  })
  return sum;
}
sum(1,2,3,4)

function greaterThanZero(num){
  return num > 0; 
}
