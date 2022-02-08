'use strict';

const factorial = function (num) {
    let result = 1;

    while (num > 1) {
        result = result * num;
        num--;
    }

    return result;
};

console.log(factorial(5));
