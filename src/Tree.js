import sortArray from "./sortArray.js";
import sortedArrayToBST from "./sortedArrayToBST.js";

const Tree = (array) => {
  let sortedArray = sortArray(array);
  let root = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);

  return { root };
};

export default Tree;
