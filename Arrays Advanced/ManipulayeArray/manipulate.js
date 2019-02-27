function solve(arr) {
    let manipulateArray = arr.shift(0).split(' ');
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        switch (command[0]) {
            case "Add":
                manipulateArray.push(command[1]);
                break;
            case "Remove":
                let num = command[1];
                manipulateArray.splice(manipulateArray.indexOf(num), 1);
                break;
            case "RemoveAt":
                numCommand = Number(command[1]);
                manipulateArray.splice(numCommand, 1);
                break;
            case "Insert":
                let numInsert = command[1];
                let index = Number(command[2]);
                manipulateArray.splice(index, 0, numInsert);
                break;
        }
    }
    return manipulateArray.join(' ');
}

console.log(solve(["4 19 2 53 6 43",
"Add 3",
"Remove 2",
"RemoveAt 1",
"Insert 8 3"]));

