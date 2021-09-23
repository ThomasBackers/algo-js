const arr1 = [1, 2, 3, 4, 5];
const arr2 = [100, 101, 102];
let sum = 0;
for (let elt of /*arr1*/arr2) {
    sum += elt;
}
console.log(sum / /*arr1*/arr2.length);
