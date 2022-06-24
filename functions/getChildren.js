const getChildren = (users) => {
  const children = users.map((user) => user.children);
  return children.flat();
};

const users = [
    {
      name: 'Tirion',
      children: [
        { name: 'Mira', birthday: '1983-03-23' },
      ],
    },
    { name: 'Bronn', children: [] },
    {
      name: 'Sam',
      children: [
        { name: 'Aria', birthday: '2012-11-03' },
        { name: 'Keit', birthday: '1933-05-14' },
      ],
    },
    {
      name: 'Rob',
      children: [
        { name: 'Tisha', birthday: '2012-11-03' },
      ],
    },
  ];
   
  getChildren(users);
  // [
  //   { name: 'Mira', birthday: '1983-03-23' },
  //   { name: 'Aria', birthday: '2012-11-03' },
  //   { name: 'Keit', birthday: '1933-05-14' },
  //   { name: 'Tisha', birthday: '2012-11-03' },
  // ];

// Alternative solution using flatMap
// export default (users) => users.flatMap(({ children }) => children);
// END
  