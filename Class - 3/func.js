let a = [1, 2, 4, 5, 3]
let a1 = addArray(a, 100) // 115

let b = [9, 3, 4, 5, 699, 7]
let b1 = addArray(b) // 727

console.log(a1, b1, a1 + b1);

function addArray(arr = [], sum = 0) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log(sum)
    return sum

}

// 115
// 727
// 115 727 ans