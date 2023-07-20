import prettyPrint from "./prettyPrint.js";
import Tree from "./Tree.js";

let arrayData = [1, 4, 3, 2, 2, 6, 5, 8, 9, 10, 7, 9];

let tree = Tree(arrayData);

prettyPrint(tree.root);



