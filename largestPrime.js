// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number){
  var num = number; 
  for(var j = num; j > 1; j--){
    if(num % j == 0 && num % 2 != 0 && isPrime(j)){
      return j;
    }
  }
  return null;
}

function isPrime(num){
  if(num > 2 && num % 2 == 0){
    return false; 
  }
  for(var i = Math.floor(num/2); i > 2; i--){
    if(num % i === 0){
      return false;
    }
  }
  return true;  
}