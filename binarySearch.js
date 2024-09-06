export function binarySearch(search, values, compFunc) {
    let min = 0;
    let max = values.length - 1;
    let mid;

    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        const comp = compFunc(search, values[mid]);
        
        if (comp === 0) {
            console.log("Element Found!");
            return mid;
        } else if (comp > 0) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return -1;
}