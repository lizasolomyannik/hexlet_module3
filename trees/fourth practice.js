import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

const downcaseFileNames = (tree) => {
    let name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    if (isFile(tree)) {
        name = name.toLowerCase();
        return mkfile(name, newMeta);
    }
    const children = getChildren(tree);
    const newChildren = children.map((child) => downcaseFileNames(child));
    const newTree = mkdir(name, newChildren, newMeta);
    return newTree;
};

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
   
console.log(downcaseFileNames(tree));