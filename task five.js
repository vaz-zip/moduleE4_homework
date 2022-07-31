const arr = [Infinity, 3, 26, 'Hello', 'Mаrtin Johanson', -273,];
console.log(`Длина массива: ${arr.length} элементов`);
for (let i = 0; i < arr.length; i += 1) {
    console.log(`Элемент массива №${i+1} - ${arr[i]}`);
}

