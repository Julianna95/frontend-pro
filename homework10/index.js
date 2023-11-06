'use strict'

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
removeElement(array, 'string');
console.log(array);