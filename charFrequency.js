/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

function characterFrequency(str){
  var arr = [];
  var results = {};
  for(var i = 0; i < str.length; i++){
    if(results[str[i]]){
      results[str[i]]++;
    } else {
      results[str[i]] = 1;
    }
  }

  for(var key in results){
    var temp = [key, results[key]];
    arr.push(temp);
  }
  arr.sort(yo);
  return arr; 
}

// Q - Time Complexity? 
// A - O(n) -> linear: no nested for-loops just 3 loops;

function yo(elem, next){
  if(elem[1] > next[1]){
    return -1;
  } else if(elem[1] === next[1]){
    if(elem[0] < next[0]){
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1; 
  }
}


// The comparison function works under the following principles
// If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
// If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
// If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
// compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined

