function solve() {

    let letters = Array.from(document.querySelectorAll('.Levski>table>thead>tr>th')).map(x => x.innerHTML);
    let textArea = document.getElementById('output');
    let summaryButton = document.getElementById('summary');

    let obj = {
        'Levski': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        '_Summary_': {
            'fans': 0,
            'totalProfit': 0
        }
    }

    Array.from(document.querySelectorAll('.seat'))
        .map(x => x.addEventListener('click', (e) => {

            let seat = e.target;
            let sectionName = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
            let indexSeat = seat.parentNode.cellIndex;
            let curLetter = letters[indexSeat];

            if (seat.style.backgroundColor === '') {
                seat.style.backgroundColor = "rgb(255,0,0)";
                textArea.value += ` Seat ${seat.textContent} in zone ${sectionName} sector ${curLetter} was taken.\n`;
                obj._Summary_.fans += 1;
                obj._Summary_.totalProfit += obj[sectionName][curLetter];
            } else {
                textArea.value += ` Seat ${seat.textContent} in zone ${sectionName} sector ${curLetter} is unavailable.\n`;
            }

            summaryButton.addEventListener('click', () => {
                summaryButton.children[1].textContent = `${obj._Summary_.totalProfit} leva, ${obj._Summary_.fans} fans`
            })
        }));
}