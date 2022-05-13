const bqs = (parameters) => {
  let result = '';
  const sortedKeys = Object.keys(parameters).sort();
  for (const key of sortedKeys) {
    result = result.concat(key, '=', parameters[key], '&');
  }
  result = result.slice(0, -1);
  return result;
};

console.log(bqs({ per: 10, page: 1 }));
