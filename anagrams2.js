function check_anagrams(first_words, second_words) {
  var wordObj = {};
  for(var i = first_words.length; i++){
    first_words[i].split('').forEach(function(letter){
      if(wordObj[letter]){
        wordObj[letter]++;
      } else {
        wordObj[letter] = 1;
      }
    });
    var anagram = true;
    second_words[i].split('').forEach(function(letter){
      if(wordObj[letter]){
        wordObj[letter]--;
      } else {
        anagram = false;
      }
    });
    anagram ? console.log(1) : console.log(0);  
  }
}



function check_anagrams(first_words, second_words) {
    for(var i = 0; i< first_words.length; i++){
        var itemone = operation(first_words[i]);
        var itemtwo = operation(second_words[i]);
        if(itemone === itemtwo){
            console.log(1);
        } else {
            console.log(0);
        }
    }
}

function operation(item){
    return item.split('').sort(function(a,b){ return a > b; }).join('');
}