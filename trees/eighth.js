import _ from 'lodash';

// const changeClass = (tree, oldName, newName) => {
//     const newTree = _.cloneDeep(tree);
//     const renamed = newTree.children
//         .map((node) => {
//             if (node.className === oldName) {
//                 node.className = newName;
//             }
//         });
//     // return { ...newTree, children: renamed };
//     return newTree;
// };

// const changeClass = (tree, oldName, newName) => {
//   const { className, children } = tree;
//   const newTree = _.cloneDeep(tree);
//   if (className === oldName) {
//     className = newName;
//   }
//   const renamed = tree
//     .filter(children.length !== 0)
//     .map()
// }

// РЕШЕНИЕ УЧИТЕЛЯ
const changeClass = (tree, classNameFrom, classNameTo) => {
  const iter = (node) => {
    const updatedNode = { ...node };

    if (_.has(node, 'className')) {
      const newClassName = classNameFrom === node.className ? classNameTo : node.className;
      updatedNode.className = newClassName;
    }

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map(iter);
      updatedNode.children = newChildren;
    }

    return updatedNode;
  };

  return iter(tree);
};

const tree = {
    name: 'div',
    type: 'tag-internal',
    className: 'hexlet-community',
    children: [
      {
        name: 'div',
        type: 'tag-internal',
        className: 'old-class',
        children: [],
      },
      {
        name: 'div',
        type: 'tag-internal',
        className: 'old-class',
        children: [],
      },
    ],
  };
   
// const clonedTree = _.cloneDeep(tree);
// console.log(clonedTree);
// console.log(tree === clonedTree);

const result = changeClass(tree, 'old-class', 'new-class');

console.log(result);