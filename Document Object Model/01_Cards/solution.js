function solve() {
    Array.from(document.querySelectorAll('#exercise img'))
        .map(x => x.addEventListener('click', () => {
            let card = x;
            console.log(x);

            let parent = x.parentNode;
            let results = Array.from(document.querySelectorAll('#exercise div span'));

            if (parent.id === "player1Div") {
                results[0].textContent = card.name;
            } else if (parent.id === "player2Div") {
                results[2].textContent = card.name;
            }
            card.src = './images/whiteCard.jpg';

            if (results[0].textContent !== '' && results[2].textContent !== '') {
                let leftCard = document.querySelector(`#exercise #player1Div img[name="${results[0].textContent}"]`);
                let rigthCard = document.querySelector(`#exercise #player2Div img[name="${results[2].textContent}"]`);

                if (Number(leftCard.name) > Number(rigthCard.name)) {
                    leftCard.style.border = "2px solid green";
                    rigthCard.style.border = "2px solid darkred";
                } else {
                    rigthCard.style.border = "2px solid green";
                    leftCard.style.border = "2px solid darkred";
                }


                setTimeout(() => {
                    let leftResult = results[0].textContent;
                    let rigthresult = results[2].textContent;
                    document.getElementById('history').textContent += `[${leftResult} vs ${rigthresult}]`;

                    results[0].textContent = '';
                    results[2].textContent= '';

                }, 2000);
            }
        }));
}



