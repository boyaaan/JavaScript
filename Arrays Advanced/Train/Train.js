function train(input) {

    let wagons = input.shift(0)
        .split(' ')
        .map(w => Number(w));

    let capacity = Number(input.shift());

    for (const commands of input) {

        if (commands.includes('Add')) {
            let nextWagon = parseInt(commands.split(' ').pop());

            if (nextWagon > capacity) {
                nextWagon = capacity;
            }
            wagons.push(nextWagon);
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(commands) <= capacity) {
                    wagons[i] += Number(commands);
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);