function sum (arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    let sum = 0;
    for(let i = 0; i<arr.length; i++) sum += arr[i];

    return sum;
}

var arr = [1, 2, 3, 4, 5, 3, 78554];
console.log(sum(arr));