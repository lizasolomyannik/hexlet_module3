import _ from 'lodash';

const average = (...numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  let sum = _.sum(numbers);
  let count = numbers.length;
  return sum / count;
}

console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null
