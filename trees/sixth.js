import { isDirectory, mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
 
const getFilesSize = (node) => {
    if (isFile(node)) {
        return getMeta(node).size;
    }
    const children = getChildren(node);
    const sizeCounts = children.map(getFilesSize);
    return _.sum(sizeCounts);
}

const du = (tree) => {
    const children = getChildren(tree);
    const result = children.map((child) => [getName(child), getFilesSize(child)]);
    return result.sort((a, b) => b[1] - a[1]);
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 35000 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log(du(tree));