'use strict';

const polidrom = function (str) {
    str = str.toLowerCase();
    if (str.split('').reverse().join('') === str) {
        return true;
    }
    return false;
};

console.log(polidrom('Оно'));
console.log(polidrom('Они'));
