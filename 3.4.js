const arr = [1, 2, 3, 4, 5];
//const arr = [1, 1, 1, 1]
let min = arr[0], max;
for (let elt of arr) {
    if (elt > min) {
        max = elt;
    } else if (elt < min) {
        min = elt;
    } else {
        max = min;
    }
}
console.log("min:", min, "\nmax:", max);
