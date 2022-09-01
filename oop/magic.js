const magic = (...args) => {
  const sum = args.reduce((acc, el) => acc + el, 0);
  const inner = (...newArgs) => {
    return magic(sum, ...newArgs);
  };
  inner.valueOf = () => sum;
  return inner;
};

console.log(magic(1, 2)(1));