const task_E35 = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

const result = task_E35(9, 2)
console.log(result)