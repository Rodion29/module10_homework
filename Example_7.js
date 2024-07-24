let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'f', 'z', null]
let even = 0
let odd = 0
let other = 0
for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 0) || (typeof(arr[i]) != "number")) {
        other++
    } else {
        if (arr[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
}
console.log('Чётные ' + even)
console.log('Нечётные ' + odd)
console.log('Остальные ' + other)