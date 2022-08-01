function _sum(x) {
    return function(y) {
        return x + y;
    };
}

let f_sum = _sum(10);
console.log( f_sum(11), f_sum(15), f_sum(22) );

console.log( _sum(10)(20), _sum(25)(122), _sum(40)(200) );