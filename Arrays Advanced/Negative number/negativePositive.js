function solve(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArray.unshift(arr[i]);
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray.join('\n');
}

console.log(solve([7, -2, 8, 9]));
     