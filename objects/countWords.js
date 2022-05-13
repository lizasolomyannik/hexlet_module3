import _ from 'lodash';

const countWords = (str) => {
    let words;
    const result = {};
    if (str.length === 0) {
      return {};
    }
    words = _.words(str);
    for (const word of words) {
        let key = word.toLowerCase();
         if (Object.hasOwn(result, key)) {
            result[key] += 1;
        } else {
            result[key] = 1;
        };
    }
    return result;
  };

const text1 = 'one two three two ONE one wow';

console.log(countWords(text1));
