arr = [1, 2, 30, null, 0, 456, 'str']

let count = 0;
let count_1 = 0;
let count_2 = 0;


arr.forEach(function (item, index, array) {

    if (typeof item === "number" && item % 2 === 0 && item !== 0) {
        return (count = count + 1)
    } else if (typeof item === "number" && item % 2 === 1 && item !== 0) {
        return (count_1 = count_1 + 1)

    } else if (item === null || item === 0 || item === -0) {
        return (count_2 = count_2 + 1)
    }
});
console.log(`Чётных: ${count}`)
console.log(`Нечётных: ${count_1}`)
console.log(`Нулевых: ${count_2}`)
