function background(){
    for (let key in city)
        console.log(key)

}
const city = {name: "Самара", age: 436, population: 1136000};
console.log(background(city))