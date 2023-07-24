import sortArray from "./sortArray.js";
import sortedArrayToBST from "./sortedArrayToBST.js";
import Node from "./Node.js";

const Tree = (array) => {
  let sortedArray = sortArray(array);
  let root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
  let size = sortedArray.length;

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
    size++;
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
    size--;
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

  const levelOrder = (func = null) => {
    let queue = [];
    let results = [];

    queue.push(root);
    while (queue.length != 0) {
      var tempNode = queue.shift();
      results.push(tempNode.data);

      if (tempNode.left != null) {
        queue.push(tempNode.left);
      }

      if (tempNode.right != null) {
        queue.push(tempNode.right);
      }
    }

    if (typeof func === "function") {
      for (let i = 0; i < results.length; i++) {
        results[i] = func(results[i]);
      }
    }

    return results;
  };

  const inOrderRec = (node, array) => {
    if (node == null) {
      return;
    }

    inOrderRec(node.left, array);

    array.push(node.data);

    inOrderRec(node.right, array);

    if (array.length === size) {
      return array;
    }
  };

  const inOrder = (func = null) => {
    let results = [];
    results = inOrderRec(root, results);

    if (typeof func === "function") {
      for (let i = 0; i < results.length; i++) {
        results[i] = func(results[i]);
      }
    }

    return results;
  };

  const preOrderRec = (node, array) => {
    if (node == null) {
      return;
    }

    array.push(node.data);

    preOrderRec(node.left, array);

    preOrderRec(node.right, array);

    if (array.length === size) {
      return array;
    }
  };

  const preOrder = (func = null) => {
    let results = [];
    results = preOrderRec(root, results);

    if (typeof func === "function") {
      for (let i = 0; i < results.length; i++) {
        results[i] = func(results[i]);
      }
    }

    return results;
  };

  const postOrderRec = (node, array) => {
    if (node == null) {
      return;
    }

    postOrderRec(node.left, array);

    postOrderRec(node.right, array);

    array.push(node.data);

    if (array.length === size) {
      return array;
    }
  };

  const postOrder = (func = null) => {
    let results = [];
    results = postOrderRec(root, results);

    if (typeof func === "function") {
      for (let i = 0; i < results.length; i++) {
        results[i] = func(results[i]);
      }
    }

    return results;
  };

  const heightRec = (node, value) => {
    if (node == null) {
      return -1;
    }

    let leftHeight = heightRec(node.left, value);

    let rightHeight = heightRec(node.right, value);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  const findHeight = (value) => {
    return heightRec(find(value), value);
  };

  const depthRec = (node, value) => {
    if (node == null) {
      return -1;
    }

    let dist = -1;

    if (
      node.data == value ||
      (dist = depthRec(node.left, value)) >= 0 ||
      (dist = depthRec(node.right, value)) >= 0
    ) {
      return dist + 1;
    }

    return dist;
  };

  const findDepth = (value) => {
    return depthRec(root, value);
  };

  const isBalancedRec = (node) => {
    if (node == null) {
      return 0;
    }

    let leftHeight = isBalancedRec(node.left);
    if (leftHeight == -1) {
      return -1;
    }

    let rightHeight = isBalancedRec(node.right);
    if (rightHeight == -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }

  };

  const isBalanced = () => {
    if (isBalancedRec(root) > 0) {
      console.log("Tree is balanced.");
    } else {
      console.log("Tree is not balanced.");
    }
  };

  const storeBSTNodesRec = (node, nodeList) => {
    if (node == null) {
      return;
    }

    storeBSTNodesRec(node.left, nodeList);
    nodeList.push(node);
    storeBSTNodesRec(node.right, nodeList);

  }

  const rebalance = () => {
    let nodes = [];
    storeBSTNodesRec(root, nodes);

    let n = nodes.length;
    root = sortedArrayToBST(nodes, 0, n - 1);
  }

  return {
    root,
    insert,
    deleteNode,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    findHeight,
    findDepth,
    isBalanced,
    rebalance,
  };
};

export default Tree;
