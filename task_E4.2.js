let str = "a"
let obj = {a: "Альфа", b: "Бэтта", c: "Гамма"}
function objStr(obj, str) {
    console.log(str in obj)
}

objStr(obj, str);