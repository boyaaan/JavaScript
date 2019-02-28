function solve(arr) {
    let sortedDescendingArrey = arr.sort((a, b) => a - b);

    let result = [];
    while (sortedDescendingArrey.length > 0) {
        let bigerNum = sortedDescendingArrey.pop();
        let smalerNum = sortedDescendingArrey.shift();

        result.push(bigerNum);
        result.push(smalerNum);
    }
    console.log(result.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

