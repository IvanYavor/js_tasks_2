function rotateArray(arr, k) {
    if(!(k >= 0 && k <= 100)) {
        console.log("Invalid argument");
        return;
    }

    for(let i = 0; i < k; i++) {
       let lastItem = arr.pop();
       arr.unshift(lastItem);
    }

    return arr;
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Starting array: ${arr}`);

let k = 3;
let rotatedArr = rotateArray(arr, k);
console.log(`${k} times rotated array ${rotatedArr}`);
