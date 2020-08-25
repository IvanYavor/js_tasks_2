function countMaxBinarySpace(N) {
    if(typeof N != "number") {
      console.log("Invalid argument");
      return;
    }

    let afterOne = false;
    let spaces = 0;
    let maxSpaces = 0;
    let binaryStr = N.toString(2);
    console.log(binaryStr);

    for(const ch of binaryStr) {
      if(ch === "1" && !afterOne) {
        afterOne = true;
      } else if(ch === "0" && afterOne) {
        spaces++;
      } else if(ch === "1" && afterOne) {
        if(maxSpaces < spaces) {
          maxSpaces = spaces;
        }
        spaces = 0;
      }
    }

    return maxSpaces;
}

let N = 13;
let res = countMaxBinarySpace(N);
console.log(`Max binary spaces in number ${N}: ${res}`);