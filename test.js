const x = prompt('Введите число')

const y = +x;

if (typeof y == "number" && !isNaN(y)) {
    if (y == 0) {
        console.log('ноль')
    } else if (y % 2 == 0) {
        console.log('число чётное')
    } else {
        console.log('число нечётное')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}