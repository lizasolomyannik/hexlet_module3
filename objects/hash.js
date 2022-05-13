import crc32 from 'crc-32';

const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make = () => [];

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

const map = make();
let result = get(map, 'key');
console.log(result); // => null
 
result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"
 
set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"