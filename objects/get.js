const get = (data, keys) => {
  let current = data;
  for (const key of keys) {
    if (Object.hasOwn(current, key) !== true) {
      return null;
    // } else if (typeof current[key] !== 'object') {
    //  return current[key];
    } else {
      current = current[key];
    }
  }
  return current;
};

const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};
 
console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false
