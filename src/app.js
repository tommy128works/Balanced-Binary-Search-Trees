import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const addOne = (data) => {
  return data + 1;
};

const randomArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

// let arrayData = [10, 40, 30, 20, 20, 60, 50, 80, 90, 100, 70, 90];
// let tree = Tree(arrayData); // tree that is used to test each function individually
// prettyPrint(tree.root);

// tree.insert(75); // insert a new node
// tree.deleteNode(50); // delete a node
// prettyPrint(tree.find(20)); // find a node

// console.log(tree.levelOrder());  // print level order traversal
// console.log(tree.levelOrder(addOne))  // apply function to each node in level order traversal

// console.log(tree.inOrder()); // print inorder traversal
// console.log(tree.inOrder(addOne))  // apply function to each node in inorder traversal

// console.log(tree.preOrder()); // print preorder traversal
// console.log(tree.preOrder(addOne)); // apply function to each node in preorder traversal

// console.log(tree.postOrder()); // print postorder traversal
// console.log(tree.postOrder(addOne)); // apply function to each node in postorder traversal

// console.log(tree.findHeight(20)); // find height of specified node

// console.log(tree.findDepth(40)); // find depth of specified node

// tree.isBalanced(); // check if tree is balanced

// tree.rebalance(); // rebalance tree
// prettyPrint(tree.root); // display final tree


// Full demonstration of Tree functions
let mainTree = Tree(randomArray(10)); // create a tree with numbers less than 100
mainTree.isBalanced(); // tree should be balanced

console.log("Level Order: " + mainTree.levelOrder()); // print elements in levelOrder
console.log("Pre Order: " + mainTree.preOrder()); // print elements in preOrder
console.log("Post Order: " + mainTree.postOrder()); // print elements in postOrder
console.log("In Order: " + mainTree.inOrder()); // print elements in inOrder

mainTree.insert(101); // unbalance tree by adding several numbers > 100
mainTree.insert(120);
mainTree.insert(200);
mainTree.insert(400);
mainTree.insert(500);

mainTree.isBalanced(); // confirm tree is unbalanced

mainTree.rebalance(); // rebalance the tree
mainTree.isBalanced(); // confirm tree is balanced again

console.log("Level Order: " + mainTree.levelOrder()); // print elements in levelOrder
console.log("Pre Order: " + mainTree.preOrder()); // print elements in preOrder
console.log("Post Order: " + mainTree.postOrder()); // print elements in postOrder
console.log("In Order: " + mainTree.inOrder()); // print elements in inOrder