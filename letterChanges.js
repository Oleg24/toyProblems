// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 


function LetterChanges(str) { 
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetArray = alphabet.split('');
  
  var alphabetHash = {};
  var idx = 0;

  alphabetArray.forEach(function(letter){
    alphabetHash[letter] = idx;
    idx++;
  });

  var stringArray = str.toLowerCase().split('');
  stringArray.forEach(function(letter, idx){
    if(alphabetHash.hasOwnProperty(letter)){
      console.log('letter', letter);
      var nextIdx = alphabetHash[letter];
      var nextLetter = alphabetArray[nextIdx+1];
      if( nextLetter === "a" || nextLetter === "e" || nextLetter === 'i' || nextLetter === 'o' || nextLetter === "u"){
        stringArray[idx] = nextLetter.toUpperCase();
      } else {
        stringArray[idx] = nextLetter;
      }
    }
  })  
  return stringArray.join('');
}