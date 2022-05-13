import _ from 'lodash';

const data = {
  key: 'value',
  key2: {
  key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// console.log(Object.entries(data));

// const cloneDeep = (data) => {
//   const cloneData = {};
//   for (const [key, value] in Object.entries(data)) {
//     if (_.isObject(value) === false) {
//       cloneData[key] = data[key];
//     }
//     cloneDeep(value);
//   }
//   return cloneData;
// };

const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};


const dataCopy = cloneDeep(data);
console.log(dataCopy);
