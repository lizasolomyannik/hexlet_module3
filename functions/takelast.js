const run = (text) => {
    const takeLast = (text, n) => {
        let result = '';
        const textArray = text.split('');
        const len = textArray.length;
        if ((len === 0) || (len < n)) {
            return null;
        }
        for (let i = (len - 1); i >= (len - n); i -= 1 ) {
            result = result.concat(textArray[i]);
        }
        return result;
    }
    return takeLast(text, 4);
};

console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx
