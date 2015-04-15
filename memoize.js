// Memoize an expensive function by storing its results. You may assume
// that the function takes only one argument and that it is a primitive.
//
// _.memoize should return a function that when called, will check if it has
// already computed the result for the given argument and return that value
// instead if possible.
  var memoize = function(func) {
    var memory = {};
    function check(val){
      if(val in memory){
        return memory[val];
      } else {
        return memory[val] = func(val);
      }
    }
      return check;
  }