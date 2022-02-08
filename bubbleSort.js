'use strict';

const bubbleSort = function (arr) {
    for (let j = 0; j < arr.length - 1; j++) {

        for (let i = 0; i < arr.length - j - 1; i++) {
            // Если текущий элемент больше следующего
            if (arr[i] > arr[i + 1]) {
                // Меняем местами элементы
                let tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
            }
        }

    }
    return arr;
};

const arr = [1, 0, 6, 9, 4, 5, 2, 3, 8, 7];
console.log(bubbleSort(arr));
