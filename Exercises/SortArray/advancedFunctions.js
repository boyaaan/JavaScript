function sortArray(inputArray, sortMothod) {

    let ascendingComparator = function (a, b) {
        return a - b;
    }

    let descendingComparator = function (a, b) {
        return b - a;
    }

    let sortingStrategies = {
        'asc':ascendingComparator,
        'desc':descendingComparator,
    }

    return inputArray.sort(sortingStrategies[sortMothod]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

