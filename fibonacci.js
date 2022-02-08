'use strict';

const fibonacci = function (num) {
    const result = [0, 1];

    for (let i = 2; i <= num; i++) {
        let prevSum1 = result[i - 1];
        let prevSum2 = result[i - 2];
        result.push(prevSum1 + prevSum2);
    }

    console.log(result);
    return result[num];
};

console.log(fibonacci(8));
