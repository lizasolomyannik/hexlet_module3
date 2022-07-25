import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
    mkdir('etc', [
      mkfile('bashrc'),
      mkfile('consul.cfg'),
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
      mkfile('ls'),
      mkfile('cat'),
    ]),
  ]);

  const dfs = (tree) => {
    // Распечатываем содержимое узла
    console.log(getName(tree));
    // Если это файл, то возвращаем управление
    if (isFile(tree)) {
      return;
    }
  
    // Получаем детей
    const children = getChildren(tree);
  
    // Применяем функцию dfs ко всем дочерним элементам
    // Множество рекурсивных вызовов в рамках одного вызова функции
    // называется древовидной рекурсией
    children.forEach(dfs);
  };
  
console.log(dfs(tree));