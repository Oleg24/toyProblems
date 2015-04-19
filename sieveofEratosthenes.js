// To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:

// Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
// Initially, let p equal 2, the first prime number.
// Starting from p, enumerate its multiples by counting to n in increments of p, and mark them in the list (these will be 2p, 3p, 4p, ... ; the p itself should not be marked).
// Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
// When the algorithm terminates, all the numbers in the list that are not marked are prime.

// finds all the primes 1 --> num

  // create an array of numbers 0 to n; assuming all are primes: 0 denotes non-prime, 1 denotes prime 
  // iterate from 2 to sqrt of num looking for primes
    // if it is a prime 
     // iterate from it to the num marking all of its multiples as 0
  // return primes 

function primeSieve(num){
  var primes = [];
  for(var i = 0; i <= num; i++){
    primes.push(1);
  }
  for(var j = 2; j <= Math.floor(Math.sqrt(primes.length)); j++){
    console.log('j', j);
    if(primes[j] === 1){
      for(var k = j * j; k <= num; k += j){
        primes[k] = 0; 
      }
    }
  }
  return primes;  
}

function primeSieve(num){
  var primes = [];
  for(var i = 0; i <= num; i++){
    primes.push(1);
  }
  for(var j = 2; j <= Math.floor(Math.sqrt(primes.length)); j++){
    if(primes[j] === 1){
      for(var k = j * j; k <= num; k += j){
          primes[k] = 0;
      }
    }
  }
  var primeNums = [];
  for(var i = 1 ; i< primes.length; i++){
    if(primes[i] === 1){
      primeNums.push(i);
    }
  } 
  return primeNums;
}
