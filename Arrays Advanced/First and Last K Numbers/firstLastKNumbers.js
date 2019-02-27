function solve(n,k) {
    let numbers = [1];

    for (let i = 1; i < n; i++) {
        let index = Math.max(i - k, 0);
        let curSequences = numbers.slice(index);
        let curNum = curSequences.reduce((a,b)=> a + b);
        numbers.push(curNum);
    }
    return numbers.join(' ');
}

console.log(solve(6, 3));
