// Given a list of N ordered integers find the longest increasing subsequence in this list. Example: If the list is [16, 3, 5, 19, 10, 14, 12, 0, 15] one possible answer is the subsequence [3, 5, 10, 12, 15], another is [3, 5, 10, 14, 15].


function findSub(input){
  var longest = [];
  var current = []; 
  function recurse(input, idx){
    console.log('current', current);
    if(idx === input.length-1 && current.length > longest.length){
      console.log('IDX SHOULD BE 8',  idx);
      console.log('current at this point', current);
      longest = current.slice();
      return;
    } else if(idx === input.length- 1 && current.length < longest.length){
      return;
    } else {    
      for(var i = idx; i < input.length; i++){
        if(!current.length){
          console.log('pushing this element', input[i]);
          current.push(input[i]);
        } else if(input[i] > current[current.length-1]){
          current.push(input[i]);
        }
        recurse(input, ++idx);
        current.pop();
        console.log('current after the POP', current);
      }
    }
  }
  recurse(input, 0);
  return longest;
}

// var test = [16, 3, 5, 19, 10, 14, 12, 0, 15]
