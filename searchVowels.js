'use strict';

const searchVowels = function (str) {
    let counter = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();

    for (let i = 0; i <= str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            counter++;
        }
    }

    return counter;
};

console.log(searchVowels('hello'));
console.log(searchVowels('world'));
