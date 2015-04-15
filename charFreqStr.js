// charFreq("hello")   --> returns 'leho'

function charFreq(str){
  var store = {};
  str.split('').forEach(function(val){
    if(store[val]){
      store[val]++;
    } else {
      store[val] = 1
    }
  });
  var arrStore = [];
  for(var key in store){
    arrStore.push([key, store[key]])
  }
  arrStore.sort(sort);
  var result = '';
  arrStore.forEach(function(val){
    result = result.concat(val[0]);
  });
  return result;
}

function sort(a,b){
  if(a[1] > b[1]){
    return -1;
  }
  if(a[1]  === b[1]){
    if(a[0] < b[0]){
      return -1;
    } else {
      return 1;
    }
  }
  return 1;
}