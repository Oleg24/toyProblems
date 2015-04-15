/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node){
  var nodes = [];
  nodes.push(node.data);
  function traverse(node){
    if(node.left){
      console.log('pushing left');
      nodes.push(node.left.data);
      traverse(node.left);
    }    
    if(node.right){
      console.log('pushing right');
      nodes.push(node.right.data);
      traverse(node.right);
    }
  }
  traverse(node); 
  return nodes;
}
// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node){
  var nodes = [];
  function traverseLeft(node){
    if(node.left){
      traverseLeft(node.left);
      nodes.push(node.left.data);
      traverseRight(node.left);
    } 
  }
  function traverseRight(node){
    if(node.right){
      traverseLeft(node.right);
      nodes.push(node.right.data);
      traverseRight(node.right);
    }
  }
  traverseLeft(node);
  nodes.push(node.data);
  traverseRight(node);
  return nodes;
}
// ["B!","Almost foxtrot.","G!",999,5555,-59322,4322,5400
// "B!",999,"G!","Almost foxtrot.",5400,4322,5555,-59322

 ["B!","Almost foxtrot.","G!",999,5555,-59322,4322,5400]
 ["B!","G!","Almost foxtrot.",999,5400,4322,5555,-59322

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node){
   var nodes = [];
  function traverseLeft(node){
    if(node.left){
      traverseLeft(node.left);
      traverseRight(node.left);
      nodes.push(node.left.data);
    } 
  }
  function traverseRight(node){
    if(node.right){
      traverseLeft(node.right);
      traverseRight(node.right);
      nodes.push(node.right.data);
    }
  }
  traverseLeft(node);
  traverseRight(node);
  nodes.push(node.data);
  return nodes;
}