let arr = [1, 2, 3, 15, 1, 1, 19, 19]
let same = true
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (typeof(arr[i]) !== typeof(arr[j])) {
            same = false;
        }
    }
}
if (same) {
    console.log('Массив одинаков')
} else {
    console.log('Массив не одинаков')
}