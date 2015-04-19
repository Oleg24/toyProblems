// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num){ 
  var primes = primeFactors(num);
  return primes[primes.length-1];
}


// Returns all the prime factors of a positive integer

function primeFactors(n){
  var factors = [];
  var it = 2;
  while(n > 1){ 
    while(n % it === 0){
      factors.push(it);
       n /= it;
    }
    it = it + 1;
  }
  return factors;
}

// create a factors array & iterator counter
// iterate from n to 1 with a while loop
  // inside while number divided by iterator has no remainder
    // push it to the factors & divide n by iterator
  // increase the iterator by 1
// return the factors array

// num = 20
// it = 2  
// num % 2 ? --> true
  // factors.push(2);
  // num = 10;
    // num % 2 ? -- true; 
      // factors.push(2)
      // num = 5;
  // it = 2 + 1
  // it = 4 
  // it = 5 
// num % it ? --> true
  // factors.push(it)
  // n = 1

  // returns 2, 2, 5

