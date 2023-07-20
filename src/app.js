import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

let arrayData = [10, 40, 30, 20, 20, 60, 50, 80, 90, 100, 70, 90];

let tree = Tree(arrayData);
// prettyPrint(tree.root);

tree.insert(25);
tree.insert(20);
prettyPrint(tree.root);

