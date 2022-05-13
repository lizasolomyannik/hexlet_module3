const pick = (data, properties) => {
  const result = {};
  const keys = Object.keys(data);
  for (const key of keys) {
    if (properties.includes(key)) {
      result[key] = data[key];
    }
  }
  return result;
};

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pick(data, ['none', 'cores']));