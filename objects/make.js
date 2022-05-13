const make = (name, features) => {
  const company = {name, state: 'moderating', ...features, createdAt: Date.now()};
  return company;
};

const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });

console.log(company);
