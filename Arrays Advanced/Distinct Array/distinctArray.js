function solve(arr) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (!nums.includes(arr[i])) {
            nums.push(arr[i]);
        }
    }
    return nums.join(" ");
}

console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));
