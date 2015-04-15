function add(a, b){

  if(a.length > 16){
    var arrA = a.split('').reverse();
    var arrB = b.split('').reverse();

    var temp = 0; 
    var result = [];
    for(var i = 0; i < arrA.length; i++){
      temp = temp + parseInt(arrA[i]) + parseInt(arrB[i]);
      if(i === arrA.length - 1){
        console.log('temp at the end' + temp);
        result.unshift(temp);
        return result.join('');
      }
      if(temp >= 10){
        remainder = temp - 10;
        result.unshift(remainder);
        temp = 1;  
      } else {
        result.unshift(temp);
        temp = 0;
      }
    }
    return result.join('');
  }
  var result = parseInt(a) + parseInt(b); 
  return result.toString();
}