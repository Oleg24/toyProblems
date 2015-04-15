// create a function called combo, which takes 2 variables (a, b) & returns the combination of a choose b

function combo(a, b){
  var n = 1;
  var numerator = 1;
  var denominator = 1;
  for(var i = a; i > a - b; i--){
    numerator *= i;
  }
  for(var j = b; j >= 1; j--){
    denominator *= j;
  }
  console.log(numerator);
  console.log(denominator);
  return numerator/denominator;
}