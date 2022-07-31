let arr = [3, 3, 3, 3]

let result = true;
let index = arr[0];

for (let i of arr) {
    if (i !== index) {
        result = false;
    }
}
console.log(arr)
console.log(`Признак однородности массива: ${result}`)
