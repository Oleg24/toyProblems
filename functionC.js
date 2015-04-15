var c = function(){
  var args = Array.prototype.slice.call(arguments, 1);
  var func = Array.prototype.slice.call(arguments, 0, 1);
  console.log(args);
  console.log(func[0]);
  return func[0].call(null, args);
};

function test(arr){
  console.log('from the inner func', arr);

  Array.prototype.forEach.call(arr, function(val){
    console.log(val);
  });
}