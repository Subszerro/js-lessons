'use strict';

const polindrome = function (str) {
    str = str.toLowerCase();
    if (str.split('').reverse().join('') === str) {
        return true;
    }
    return false;
};

console.log(polindrome('Оно'));
console.log(polindrome('Он'));
