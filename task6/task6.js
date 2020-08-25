function timeToJump(arr, x) {
    const leavesArr = [];
    arr.forEach((element, index) => {               
        if(leavesArr[element] === undefined) {
            leavesArr[element] = index;
        }
    });

    // Checking
    for(let i = 1; i <= x; i++) {
        if(leavesArr[i] === undefined) {
            return -1;
        }
    }

    // Remove 0th leaf
    leavesArr.shift();
    
    return Math.max(...leavesArr);
}

//                     
let res = timeToJump([1, 4, 5, 3, 3, 1, 5, 2], 5);
if(res === -1) {
    console.log("Frog couldn't get to the other side of the river");
} else {
    console.log(`${res} seconds needs frog to get to the other side of the river`);
}