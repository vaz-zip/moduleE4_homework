function typeNumbers() {
    const arr = [0, null, NaN, 0, "str", 33, 1, 234, 4, 6]

    let count = 0,
        count_1 = 0,
        count_2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                count_2 += 1;
            } else if (arr[i] % 2 === 0) {
                count += 1;
            } else {
                count_1 += 1;
            }
        }
    }

    console.log('четных элементов: ', count)
    console.log('нечетных элементов: ', count_1)
    console.log('нулей: ', count_2)
}

typeNumbers()