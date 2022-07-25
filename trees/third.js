import _ from 'lodash';

import {
    mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory,
} from '@hexlet/immutable-fs-trees';

// const compressImages = (tree) => getChildren(tree).map((item) => {
//     const name = getName(item);
//     const newMeta = _.cloneDeep(getMeta(item));
//     if (name.slice(-4) === '.jpg') {
//         newMeta.size = newMeta.size / 2;
//         return mkfile(name, newMeta);
//     }
//     if (isFile(item)) {
//         return mkfile(name, newMeta);
//     }
//     return mkdir(name, getChildren(item), newMeta);
// });

const compressImages = (tree) => {
    let metaSize;
    const children = getChildren(tree);
    const newChildren = children.map((item) => {
        const name = getName(item);
        const newMeta = _.cloneDeep(getMeta(item));
        if ((name.slice(-4) === '.jpg') & (isFile(item))) {
            metaSize = { size: (newMeta.size / 2)};
            return mkfile(name, metaSize);
        }
        if (isFile(item)) {
            return mkfile(name, newMeta);
        } else {
            return mkdir(name, newMeta);
        }
    });
    const newMeta = _.cloneDeep(getMeta(tree));
    const newTree = mkdir(getName(tree), newChildren, newMeta);
    return getChildren(newTree);
};
  
// const tree = mkdir('my documents', [
//     mkfile('avatar.jpg', { size: 100 }),
//     mkfile('passport.jpg', { size: 200 }),
//     mkfile('family.jpg', { size: 150 }),
//     mkfile('addresses', { size: 125 }),
//     mkdir('presentations')
// ]);
   
const tree = mkdir('my documents', [
    mkdir('documents.jpg'),
    mkfile('avatar.jpg', { size: 100 }),
    mkfile('passport.jpg', { size: 200 }),
    mkfile('family.jpg', { size: 150 }),
    mkfile('addresses', { size: 125 }),
    mkdir('presentations'),
]);

const newTree = compressImages(tree);

const expectation = [
    {
      name: 'documents.jpg',
      type: 'directory',
    },
    {
      name: 'avatar.jpg',
      meta: { size: 50 },
      type: 'file',
    },
    {
      name: 'passport.jpg',
      meta: { size: 100 },
      type: 'file',
    },
    {
      name: 'family.jpg',
      meta: { size: 75 },
      type: 'file',
    },
    {
      name: 'addresses',
      meta: { size: 125 },
      type: 'file',
    },
    {
      name: 'presentations',
      type: 'directory',
    },
];

console.log('Ожидание:');
console.log(expectation);
console.log('Реальность:');
console.log(newTree);