const getGirlFriends = (users) => {
  const friends = users.map((user) => user.friends).flat();
  const GirlFriends = friends.filter((friend) => friend.gender === 'female');
  return GirlFriends;
};

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];
   
console.log(getGirlFriends(users));