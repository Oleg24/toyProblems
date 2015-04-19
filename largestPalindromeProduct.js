// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

//  Brute force solution - n^2.  Will need to refactor.  

function findLargestPalindrome(){
  var fixed = 999;
  var dec = 999;
  var largest = 90909;  
  for(var i = fixed; i > 900; i--){
    console.log('fixed', fixed);
    for(var j = dec; j > 900; j--){
      var product = j * i;
      console.log('product', product)
      if(isPalindrome(product) && product > largest){
        largest = product;
      } 
    }   
  }
  return largest;
}



function isPalindrome(num){
  var pali = true;
  var numStr = num.toString();
  var numArr = numStr.split('');

  for(var i = 0; i < numArr.length; i++){
    if(numArr[i] !== numArr[numArr.length - 1 - i]){
      pali = false;
      return pali;
    } 
  }
  return pali;
}