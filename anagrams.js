// given an 2 input arrays of strings, log 1 if the strings at each index are anagrams of each other 0 if not.  

// Example areAnagrams(['cat', 'pen', 'paper', 'sex'], ['tac', 'nope', 'rappe', 'xes'])
// 1
// 0
// 1

function areAnagrams(inputone, inputtwo){
  for(var i = 0; i < inputone.length; i++){
    var itemone = operation(inputone[i]);
    var itemtwo = operation(inputtwo[i]);
    if(itemone === itemtwo){
      console.log(1);
    } else {
      console.log(0);
    }
  }
}

function operation(item){
  return item.split('').sort(function(a,b){ return a > b}).join('');
}