export function length(array) {
    return array.length;
}

export function push(array, item) {
    array[array.length] = item;
    return array.length;
}

export function pop(array) {
    let item = array[array.length - 1];
    array.length = array.length - 1;
    return item;
}

export function shitf(array) {
    let item = array[0];
    array.length = array.length - 1;
    return item;
}

export function unshitf(array, item) {
    array.length = array.length + 1;
    return array.length;
}
