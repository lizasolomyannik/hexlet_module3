import _ from "lodash";

// const getMenCountByYear = (users) => users.reduce((acc, object) => {
//   const groupName = object.birthday.slice(0, 4);
//   const group = acc[groupName] ?? [];
//   return { ...acc, [groupName]: group.concat(object) };
// }, {});

const getMenCountByYear = (users) => users
  .map((user) => {
      const year = user.birthday.slice(0, 4);
      return year;
  })
  .filter((user) => user.gender === 'male')
  .reduce((acc, user) => {
      const count = _.get(acc, user, 0) + 1;
      return { ...acc, [user]: count};
  }, {});

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];
   
console.log(getMenCountByYear(users));
  // {
  //   1973: 3,
  //   1963: 1,
  //   1980: 2,
  //   2012: 1,
  //   1999: 1,
  // };