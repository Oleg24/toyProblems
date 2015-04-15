var fibonacci = function(n, cache) {
  var cache = cache || [[0, 0], [1,1]];
  if(n == 0 || n == 1){
    return cache[n][1];
  }
  for(var i = 0; i < cache.length; i++){
    if(cache[i][0] === n){
      var lookup = cache[i][1];
      console.log(lookup);
      return lookup;
    } 
  }
  var result = fibonacci(n-1, cache) + fibonacci(n-2, cache);
  cache.push([n, result]);
  return fibonacci(n-1, cache) + fibonacci(n-2, cache);
}

// if the cache has a length
// search the cache for the number 

var Fib = {
  compute: function(positionInSeq){
    if(positionInSeq === 0){
      return 0;
    }
    if(positionInSeq === 1 || positionInSeq === 2 ){
      return 1;
    }
    return Fib.compute(positionInSeq - 1) + Fib.compute(positionInSeq - 2);
  },
  memoize: function(func){
    var memory = {};
    return function(val){
      if(val in memory){
        return memory[val];
      } else {
        return memory[val] = func(val);
      }
    }; 
  }
}

Fib.compute = Fib.memoize(Fib.compute)

// Fib iterative 

function FibIt(n){
  var fibSeq = [0, 1];
  for(var i = 1; i <= n; i++){
    fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
  }
  return fibSeq[n];
}








