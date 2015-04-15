function guessGifts(wishlist, presents) {
  // TODO
  var guess = [];
  presents.forEach(function(val){
    for(var i = 0; i < wishlist.length; i++){
      if(val.clatters === wishlist[i].clatters){
        if(val.size === wishlist[i].size){
          if(val.weight === wishlist[i].weight){
            guess.push(wishlist[i].name)
          }
        }
      }
    }
  });

    guess = guess.reduce(function(obj, val, idx){
      if(obj.cache[val]){
        if(idx === guess.length-1){
          return obj.storage
        }
        return obj;
      } else {
        obj.storage.push(val)
        obj.cache[val] = true;
        if(idx === guess.length-1){
          return obj.storage
        }
        return obj;
      } 
    },{ storage: [], cache: {}});

  return guess;
}

Given wishlist [{"name":"bobble hat","size":"small","clatters":"no","weight":"light"},
{"name":"socks","size":"small","clatters":"no","weight":"light"},
{"name":"card game","size":"small","clatters":"no","weight":"light"}] 



and presents 
[{"size":"small","clatters":"no","weight":"light"},
{"size":"small","clatters":"no","weight":"light"}] - 

Expected: ["bobble hat","card game","socks"], instead got: 


["bobble hat","bobble hat","card game","card game","socks","socks"]
