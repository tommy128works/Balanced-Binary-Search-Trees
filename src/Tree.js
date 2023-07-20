import sortArray from "./sortArray.js";
import sortedArrayToBST from "./sortedArrayToBST.js";
import Node from "./Node.js";

const Tree = (array) => {
  let sortedArray = sortArray(array);
  let root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);

  const insertRec = (node, value) => {
    if (node === null) {
      node = Node(value);
      return node;
    }

    if (value < node.data) {
      node.left = insertRec(node.left, value);
    } else if (value > node.data) {
      node.right = insertRec(node.right, value);
    }

    return node;
  };

  const insert = (value) => {
    root = insertRec(root, value);
  };

  const deleteNodeRec = (node, value) => {
    if (node === null) {
      return node;
    }

    if (node.data > value) {
      node.left = deleteNodeRec(node.left, value);
      return node;
    } else if (node.data < value) {
      node.right = deleteNodeRec(node.right, value);
      return node;
    }

    if (node.left === null) {
      let temp = node.right;
      node = null;
      return temp;
    } else if (node.right === null) {
      let temp = node.left;
      node = null;
      return temp;
    } else {
      let succParent = node;

      let succ = node.right;

      while (succ.left !== null) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== node) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      node.data = succ.data;

      succ = null;
      return node;
    }
  };

  const deleteNode = (value) => {
    root = deleteNodeRec(root, value);
  };

  const findRec = (node, value) => {
    if (node.data === value) {
      return node;
    }

    if (value < node.data) {
      return findRec(node.left, value);
    } else if (value > node.data) {
      return findRec(node.right, value);
    }
  };

  const find = (value) => {
    return findRec(root, value);
  };


  return { root, insert, deleteNode, find };
};

export default Tree;
