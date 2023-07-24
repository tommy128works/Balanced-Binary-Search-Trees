import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

const addOne = (data) => {
  return data + 1;
}

let arrayData = [10, 40, 30, 20, 20, 60, 50, 80, 90, 100, 70, 90];

let tree = Tree(arrayData);
// prettyPrint(tree.root);

// tree.insert(75); // insert a new node
// tree.deleteNode(50); // delete a node
// prettyPrint(tree.find(20)); // find a node

// console.log(tree.levelOrder());  // print level order traversal
// console.log(tree.levelOrder(addOne))  // apply function to each node in level order traversal
console.log(tree.inOrder()); // print inorder traversal

// prettyPrint(tree.root); // display final tree


