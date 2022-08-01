function primeNumbers(num) {
    let primeNum, result;
    primeNum = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primeNum = false;
            }
        }
        result = primeNum ? `Число ${num} - простое число` : `Число ${num} - составное число`;
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
}


console.log(primeNumbers(10))



