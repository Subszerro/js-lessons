'use strict';

const anagram = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i <= word1.length; i++) {
        let simbol = word1[i];
        obj1[simbol] = obj1[simbol] ? obj1[simbol] + 1 : 1;
    }

    for (let i = 0; i <= word2.length; i++) {
        let simbol = word2[i];
        obj2[simbol] = obj2[simbol] ? obj2[simbol] + 1 : 1;
    }

    for (let key in obj1) {
        if (!obj2[key] || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    for (let key in obj2) {
        if (!obj1[key] || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'world'));
