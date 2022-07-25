const flatten = (list) => {
    const iter = (item, finalArray) => {
        if (Array.isArray(item)) {
            finalArray.concat(item);
        }
        return finalArray;
    }

};

const list = [1, 2, [3, 5], [[4, 3], 2]];

// console.log(list.flat(2));