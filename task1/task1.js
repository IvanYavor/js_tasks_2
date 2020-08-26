/*
                    Задача 1
        Напишите функцию, которая пишет в консоль число в заданном диапазоне,
        в случае, если оно успешно делится или не делится с остатком или без остатка
        в зависимости от параметров.

*/


function main(start, end, divider, isDivided, withRemainder) {
    var Num = function(value, divider, isDivided,  remainder){
        this.value = value;
        this.divider = divider;
        this.isDivided = isDivided;
        this.remainder = remainder;
    }
    var numArr = [];
    
    // check range
    if(start > end) {
        console.log("Invalid range input.");
        return -1;
    }

    if(isDivided) {
        for(var i = start; i <= end; i++) {
            if(i % divider === 0) {
                numArr.push(new Num(i, divider, true, 0));
            }
        }
    } else if(isDivided === false) {
        for(var i = start; i <= end; i++) {
            if(i % divider !== 0) {
                numArr.push(new Num(i, divider, false, i%divider));
            }
        }
    }


    if(withRemainder) {
        numArr.forEach(function(current) {
            console.log("value: " + current.value + " remainder: " + current.remainder);
        });
    } else if(withRemainder === false) {
        numArr.forEach(function(current) {
            console.log("value: " + current.value);
        });
    }
}