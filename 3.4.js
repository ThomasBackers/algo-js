const arr = [200, 9, 2, 11, 6, 5, 21, 6];
//const arr = [1, 1, 1, 1]
let min = arr[0], max = arr[0];
for (let elt of arr) {
    if (elt > max) {
        max = elt;
    } else if (elt < min) {
        min = elt;
    }
}
console.log("min:", min, "\nmax:", max);
