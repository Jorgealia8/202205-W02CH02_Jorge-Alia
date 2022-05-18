export function length(array) {
    checkArray(array);
    return array.length;
}

export function push(array, item) {
    checkArray(array);
    checkItem(item);
    array[array.length] = item;
    return array.length;
}

export function pop(array) {
    checkArray(array);
    let item = array[array.length - 1];
    array.length = array.length - 1;
    return item;
}

export function shitf(array) {
    checkArray(array);
    let item = array[0];
    array.length = array.length - 1;
    return item;
}

export function unshitf(array, item) {
    checkItem(item);
    checkArray(array);
    for (let i = array.length; i >= 0; i--) {
        array[i] = array[i - 1];
        array[0] = item;
    }
    return array.length;
}

export function some(array, condition) {
    checkArray(array);
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i]) === true) {
            return true;
        }
    }
    return false;
}

export function every(array, condition) {
    checkArray(array);
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i]) === false) {
            return false;
        }
    }
    return true;
}

export function find(array, condition) {
    checkArray(array);
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            return array[i];
        }
    }
}

// FUNCIÓN FILTER EN PRUEBAS
// export function filter(array, condition) {
//     checkArray(array);
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (condition(array[i])) {
//             push(newArray, array[i]);
//         }
//     }
//     return newArray;
// }

function checkItem(item) {
    if (!isNaN(item)) {
        return item;
    } else {
        throw new Error('ERROR. El dato introducido no es un número');
    }
}

function checkArray(array) {
    if (Array.isArray(array)) {
        return array;
    } else {
        throw new Error('ERROR. El dato introducido no es un array');
    }
}
