import Node from "./Node.js";

const Tree = (array) => {
  let root = null;

  const buildTree = (array) => {

    array.sort(function(a, b) {return a - b});
    let index = 1;
    let previousValue = array[0];
    while(array[index]) {
      if (array[index] === previousValue) {
        array.splice(index, 1);
      } else {
        previousValue = array[index];
        index++;
      }
    }

    console.log(array);


    // return root
  }

  buildTree(array);

  // return { append };
};

export default Tree;
