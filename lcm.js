var lcm = function () {
  // TODO: Program me
  var args = Array.prototype.slice.call(arguments);


  // find the prime factors of each number

  function primeFactorFinder(num, primeFactors){
    var primeFactors = primeFactors || [];
    if(isPrime(num)){
      primeFactors.push(num);
      return primeFactors;
    }
    for(var i = 2; i <= Math.floor(num/2); i++){
      if(num % i === 0){
        primeFactors.push(i);
        if(isPrime(num/i)){
          primeFactors.push(num/i);
          return primeFactors;
        } else {
          return primeFactorFinder(num/i, primeFactors);
        }
      }
    }
  }

  function isPrime(num){
    var isPrime = true;
    if(num === 1 || num === 2 || num === 3){
      return isPrime;
    } else {
      for(var j = 2; j <= Math.floor(num/2); j++){
        if(num % j === 0){
          isPrime = false;
          return isPrime;
        }
      }
    }
    return isPrime;
  };

  
  var results = args.reduce(function(countObj, val, idx){
    countObj[val] = primeFactorFinder(val).reduce(function(obj, num){
      if(obj[num]){
        obj[num]++;
        return obj;
      } else {
        obj[num] = 1;
        return obj
      }
    },{});
    return countObj;
  },{});

  var lcms = {};
  for(var key in results){
    for(var sec in results[key]){
      if(!lcms[sec] || lcms[sec] < results[key][sec]){
        lcms[sec] = results[key][sec];
      }
    }
  }


  
  // var unique = allPF.reduce(function(obj, val, idx){
  //   if(obj.cache[val]){
  //     if(idx === allPF.length-1){
  //       return obj.storage
  //     }
  //     return obj;
  //   } else {
  //     obj.storage.push(val)
  //     obj.cache[val] = true;
  //     if(idx === allPF.length-1){
  //       return obj.storage
  //     }
  //     return obj;
  //   } 
  // },{ storage: [], cache: {}});

  var answer = 1;
  for(var key in lcms){
    answer = answer*Math.pow(key, lcms[key]);
  }

  return answer;

};