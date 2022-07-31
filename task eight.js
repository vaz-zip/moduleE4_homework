let map = new Map();
map.set("apple", "green");
map.set("strawberry", "red");
map.set("blueberry", "blue")

let arr = map.keys()
for (let key of arr) {
    console.log(`"Ключ-${key}, значение-${map.get(key)}"`)
}
