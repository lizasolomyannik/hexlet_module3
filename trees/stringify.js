// import _ from 'lodash';

// const stringify = (tree, replacer = ' ', spaces = 1) => {
//   let result = '';
//   let string;
//   const iter = (tree) => {
//     for (const [ key, value ] of Object.entries(tree)) {
//       if (_.isObject(value)) {
//          for (const [ innerKey, innerValue ] of Object.entries(value)) {
//             return iter(innerValue);
//          }
//       }
//       string = `${replacer.repeat(spaces)}${key}: ${value}\n`;
//       result += string;
//     }
//     return `{\n${result}}`;
//    };
//    if (_.isObject(tree)) {
//       return iter(tree);
//    }
//    return _.toString(tree);
// };

// const stringify = (tree, replacer = ' ', spaces = 1) => {
//    let result = '';
//    const spacesCount = replacer.repeat(spaces);

//    const iter = (node, depth) => {
//       if (!_.isObject(node)) {
//          return _.toString(node);
//       };
//       // for (const [ key, value ] of Object.entries(node)) {
//       //    if (!_.isObject(value)) {
//       //       const string = `${spacesCount * depth}${key}: ${value}\n`;
//       //       result += string;
//       //    }
//       //    const string = `${spacesCount * depth}${key}: ${value}\n`;
//       //    result += string;
//       //    iter(value, depth + 1);
//       // }

//       // return `{\n${result}}`;

//       for (const [ key, value ] of Object.entries(node)) {
//          return children.map((child) => {
//             const string = `${spacesCount * depth}${key}: ${iter(value, depth + 1)}\n`;
//             return string;
//          });
//       };

//    };

//    return iter(tree, 1);
// };

const stringify = (data, replacer = ' ', spaces = 1) => {
   const iter = (node, depth) => {
      if (typeof node !== 'object' || node === null) {
         return `${node}`;
      }
      const strArray = Object.entries(node).map(([ key, value ]) => `${replacer.repeat(depth * spaces)}${key}: ${iter(value, depth + 1)}`);
      const finalString = strArray.join(`\n`);
      const result = `{\n${finalString}\n${replacer.repeat(spaces * (depth - 1))}}`;
      return result;
   }
   return iter(data, 1);
};

const data = { hello: 'world', is: true, nested: { count: 5 } };
const nested = {
   string: 'value',
   boolean: true,
   number: 5,
   float: 1.25,
   object: {
     5: 'number',
     1.25: 'float',
     null: 'null',
     true: 'boolean',
     value: 'string',
     nested: {
       boolean: true,
       float: 1.25,
       string: 'value',
       number: 5,
       null: null,
     },
   },
 };

console.log(stringify(nested, '|-', 2));
