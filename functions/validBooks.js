import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive().integer(),
  link: yup.string().url().min(1),
  genre: yup.string().oneOf(genres),
});

// const getInvalidBooks = (books) => books.map((book) => {
//   if (!schema.isValidSync(book)) {
//     return book;
//   }
// });

const getInvalidBooks = (books) => books.filter((book) => !schema.isValidSync(book));

const books = [
  { name: 'book', author: 'author' },
  { author: 'author 2' },
];

const invalidBooks = getInvalidBooks(books);
console.log(invalidBooks); // [{ author: 'author 2' }]
