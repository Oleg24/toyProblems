function validParentheses(parens){
  //TODO
  var open = "(", close = ")";
  var stack = []; 
  
  parens.split('').forEach(function(val){
    if(val === open){
      stack.push(val);
    }
    // if the item is a "close" paren and there is something in the stack
    if(val === close && !!stack.length){
      // check the last item in the stack
      // if it is an open then pop it off
      var placeholder = stack[stack.length-1];
      if(placeholder === open){
        stack.pop();
      }
      // otherwise lets just push the "close" paren onto the stack
    } else if(val === close){
      stack.push(val);
    }
  });
  // at the end if there is nothing in the stack return true: false;
  if(!stack.length){
    return true;
  } 
    return false;
}