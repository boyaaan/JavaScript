function solve() {
    Array.from(document.querySelectorAll('#exercise button'))
        .map(b => b.addEventListener('click', () => {
            let name = b.name;
            
            let createDiv = document.createElement('div');
            let createSpan = document.createElement('span');
            let createP = document.createElement('p');

            let me = document.querySelector('#exercise #myChatBox').value;
            let pesho = document.querySelector('#exercise #peshoChatBox').value;
            let result = document.querySelector('#exercise #chatChronology');

            if (name === 'myBtn') {
                createSpan.textContent = 'Me';
                createP.textContent = me;
            } else if ('peshoBtn') {
                createSpan.textContent = 'Pesho';
                createP.textContent = pesho;
            }
            createDiv.appendChild(createSpan);
            createDiv.appendChild(createP);
            name === 'myBtn' ? createDiv.style.textAlign = "left" : createDiv.style.textAlign = "right";
            result.appendChild(createDiv);

            document.querySelector('#exercise #myChatBox').value = '';
            document.querySelector('#exercise #peshoChatBox').value = '';
        }))
}