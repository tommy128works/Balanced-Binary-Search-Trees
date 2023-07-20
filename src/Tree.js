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

  const deleteNodeRec = (root, value) => {
    if (root === null) {
      return root;
    }

    if (root.data > value) {
      root.left = deleteNodeRec(root.left, value);
      return root;
    } else if (root.data < value) {
      root.right = deleteNodeRec(root.right, value);
      return root;
    }

    if (root.left === null) {
      let temp = root.right;
      root = null;
      return temp;
    } else if (root.right === null) {
      let temp = root.left;
      root = null;
      return temp;
    } else {
      let succParent = root;

      let succ = root.right;

      while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== root) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      root.data = succ.data;

      succ = null;
      return root;
    }
  }

  const deleteNode = (value) => {
    root = deleteNodeRec(root, value);
  }


  return { root, insert, deleteNode };
};

export default Tree;
