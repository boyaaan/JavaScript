function solve(arr) {
    let oddSequences = [];
   for (let i = 0; i < arr.length; i++) {
        if (i %2 !== 0) {
            let curNum = arr[i] * 2;
            oddSequences.push(curNum);
        }
    }
    return oddSequences.reverse().join(' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]));
