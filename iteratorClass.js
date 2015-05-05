// criss-cross iterator Class with a few methods;

function Iterator(){
  var store = [];
  var inc = 0;
  var argumentsArray = Array.prototype.slice.call(arguments).sort(function(a,b){ return a.length < b.length});
  var length = argumentsArray[0].length;
  while(inc <= length){
    for(var i = 0; i < arguments.length; i++){
      if(arguments[i][inc]){
        store.push(arguments[i][inc]);
      }
    }
    inc++;    
  }
  return {
    hasNext: function(){
      if(store.length > 0){
        return true;
      } else {
        return false;
      }
    },
    next: function(){
      if(this.hasNext()){
        return store.shift();
      } else {
        return 'nothing next';
      }
    },
    peak: function(){
      return store;
    }
  }
}