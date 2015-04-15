function add(){
  var sum = 0;
  Array.prototype.forEach.call(arguments, function(val){
    if(val > 0){
      sum += val
    }
  });
  return sum;
}