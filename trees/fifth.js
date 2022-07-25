import _ from 'lodash';

import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (tree) => {
  if ((isFile(tree)) && (getName(tree).startsWith('.'))) {
    return 1;
  }
  if ((isFile(tree)) && (getName(tree).startsWith('.') === false)) {
    return 0;
  }
  const children = getChildren(tree);
  const hiddenCounts = children.map(getHiddenFilesCount);
  return _.sum(hiddenCounts);
};

// РЕШЕНИЕ УЧИТЕЛЯ:
// const getHiddenFilesCount = (node) => {
//   const name = getName(node);
//   if (isFile(node)) {
//     return name.startsWith('.') ? 1 : 0;
//   }

//   const children = getChildren(node);
//   const hiddenFilesCounts = children.map(getHiddenFilesCount);
//   return _.sum(hiddenFilesCounts);
// };

const tree = mkdir('/', [
    mkdir('etc', [
      mkdir('apache'),
      mkdir('nginx', [
        mkfile('.nginx.conf', { size: 800 }),
      ]),
      mkdir('.consul', [
        mkfile('.config.json', { size: 1200 }),
        mkfile('data', { size: 8200 }),
        mkfile('raft', { size: 80 }),
      ]),
    ]),
    mkfile('.hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
  ]);
     
console.log(getHiddenFilesCount(tree)); // 3