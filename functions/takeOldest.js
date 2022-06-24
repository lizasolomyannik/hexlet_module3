import _ from 'lodash';

// const takeOldest = (users, n = 1) => {
//   const result = [];
//   const [... birthday] = users;
//   const usersSorted = _.sortBy(users, birthday);
//   console.log(usersSorted);
//   for (let i = 0; i < n; i += 1) {
//       result.push(usersSorted[i]);
//   }
//   return result;
// };

const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users, 3));
