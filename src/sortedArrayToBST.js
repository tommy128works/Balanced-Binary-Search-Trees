import Node from "./Node.js";

const sortedArrayToBST = (array, start, end) => {
  if (start > end) {
    return null;
  }

  let mid = parseInt((start + end) / 2);
  let node = Node(array[mid]);

  node.left = sortedArrayToBST(array, start, mid - 1);
  node.right = sortedArrayToBST(array, mid + 1, end);

  return node;
};

export default sortedArrayToBST;
