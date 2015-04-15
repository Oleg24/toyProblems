function longestPalindrome(str){
  var longest = '';
  str.split(' ').forEach(function(word){
    if(isPalindrome(word) && word.length > longest.length){
      longest = word;
    }
  });
  return longest === '' ? null : longest;
}

function isPalindrome(str){
  // set up the bases cases for true & false
  if(str.length === 0 || str.length === 1){
    return true;
  } else if(str[0] !== str[str.length-1]){
    return false;
  } else {
    return isPalindrome(str.slice(1, str.length-1));
  }
}