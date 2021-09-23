const arr_in = [1, 2, 3, 4, 5];
const arr_out = [];
for (let elt of arr_in) {
    arr_out.push(elt);
}
console.log(arr_out);

const arr_out2 = [...arr_in];
console.log(arr_out2);
