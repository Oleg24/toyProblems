// Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. \

function MultipleBrackets(str) { 
  var stack = [], openParen = '(', closeParen = ")", openBracket = '[', closeBracket = ']', counter = 0, numParens = 0, numBrackets = 0;

  for(var i = 0; i < str.length; i++){
    if(str[i] === openParen || str[i] === openBracket){
      stack.push(openParen)
      if(str[i] === openParen){
        numParens++;
      } else if (str[i] === openBracket){
        numBrackets++;
      }
    } else if(str[i] === closeParen || str[i] === closeBracket){
      if(!stack.length){
        return 0;
      } else if(str[i] === closeParen){
        stack.pop();
        counter++; 
        numParens--;
      } else if(str[i] === closeBracket){
        stack.pop();
        counter++; 
        numBrackets--; 
      }
    }
  }
  if(numParens !== 0 || numBrackets !== 0){
    return 0;
  } else if(stack.length){
    return 0;
  } else {
    return 1+" "+counter; 
  }         
}

