function solve(arr){
    let curArr = arr.sort((a,b) => a - b);
    curArr = curArr.slice(0,2);
    return curArr.join(" ");
}

console.log(solve([3, 0, 10, 4, 7, 3]));
