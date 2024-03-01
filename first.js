const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"a", 2:"b"}

const full = Object.assign({}, obj1, obj2)

console.log(full)
console.log(obj1)