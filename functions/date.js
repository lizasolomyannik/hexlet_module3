const convert = (...dates) => {
  const result = [];
  for (const date of dates) {
      const year = date[0];
      const month = date[1];
      const day = date[2];
      const readDate = new Date(year, month, day);
      result.push(readDate.toDateString());
  }
  return result;
};

console.log(convert([1993, 3, 24]));
