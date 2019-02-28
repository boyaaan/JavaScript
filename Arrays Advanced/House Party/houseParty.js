function solve(arr) {
    let gests = [];

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(' ')[0];

        if (!arr[i].includes("not")) {
            if (!gests.includes(name)) {
                gests.push(name);
            }else{
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (gests.includes(name)) {
                let index = gests.indexOf(name);
                gests.splice(index,1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return gests.join('\n');
}

console.log(solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
));
