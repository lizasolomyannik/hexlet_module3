const fromPairs = (data) => {
  const result = {};
  for (let i = 0; i < data.length; i += 1) {
      const [ key, value ] = data[i];
      result[key] = value;
  }
  return result;
};

console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// { 'cat': 11, 'dog': 6 }
