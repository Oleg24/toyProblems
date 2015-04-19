// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function findLargestPalindrome(){

}

// brute force - Fix 999, countdown from 999 for the other number and check if it is a palindrome.  

isPalindrome(num){
  var pali = true;
  var numArr = num.split('');

  for(var i = 0; i < numArr.length; i++){
    if(numArr[i] !== numArr[numArr.length - 1 - i]){
      pali = false;
      return pali;
    } 
  }
  return pali; 
}