function numberOfUniqueValues(arr) {
    const uniq = new Set();

    for(const elem of arr) {
        uniq.add(elem);
    }

    return uniq.size;
}

let res = numberOfUniqueValues([2, 1, 1, 2, 3, 1, 3, 3, 3, 3,4, 4, 4, 5, 5, 6, 6, 0, -1, -2]);

console.log(`Number of unique values in array: ${res}`);