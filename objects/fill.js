import _ from 'lodash';

const fill = (obj1, keys, obj2) => {
  if (keys.length === 0) {
      return Object.assign(obj1, obj2);
  }
  const mergeObj = _.pick(obj2, keys);
  Object.assign(obj1, mergeObj);
  return obj1;
};

const company = {
  name: null,
  state: 'moderating',
};
   
const data = {
  name: 'Hexlet',
  state: 'published',
};

console.log(fill(company, [], data));
