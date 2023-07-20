import sortArray from "./sortArray.js";
import sortedArrayToBST from "./sortedArrayToBST.js";
import Node from "./Node.js";

const Tree = (array) => {
  let sortedArray = sortArray(array);
  let root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);



  const insertRec = (root, value) => {
    if (root === null) {
      root = Node(value);
      return root;
    }

    if (value < root.data) {
      root.left = insertRec(root.left, value);
    } else if (value > root.data) {
      root.right = insertRec(root.right, value);
    }

    return root;
  }
  
  const insert = (value) => {
    root = insertRec(root, value);
  }

  return { root, insert };
};

export default Tree;
