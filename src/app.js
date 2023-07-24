import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const addOne = (data) => {
  return data + 1;
};

let arrayData = [10, 40, 30, 20, 20, 60, 50, 80, 90, 100, 70, 90];

let tree = Tree(arrayData);
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

console.log(tree.findDepth(40)); // find depth of specified node

// prettyPrint(tree.root); // display final tree
