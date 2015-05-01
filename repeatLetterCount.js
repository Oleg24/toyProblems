// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCount(str) { 
  var winword, repeatingLetters = 0, wordArray = str.split(' ');
  for(var i = 0; i < wordArray.length; i++){
    var word = wordArray[i], currentRepeating = 0, wordMapped = {};
    for(var j = 0; j < word.length; j++){
      if(wordMapped[word[j]]){
        wordMapped[word[j]]++;
      } else {
        wordMapped[word[j]] = 1;
      }
    }
    for(var letter in wordMapped){
      if(wordMapped[letter] >= 2){
        currentRepeating++;
      }
    }
    if(currentRepeating > repeatingLetters){
      repeatingLetters = currentRepeating;
      winword = word; 
    }
  }
  return winword ? winword : -1;     
}