function solve() {

    let output = document.getElementById('output');

    document.querySelector('button')
        .addEventListener('click', () => {

            let input = document.getElementById('input').value;
     
            let pattern = /[0-9]+/g;

            let numOfCharecters = input.match(pattern)[0];
            let sliceString = input.substr(numOfCharecters.length,Number(numOfCharecters));
            let delimiter = sliceString[sliceString.length -1];
            let parts = sliceString.split(delimiter).filter(Boolean);
            parts[1] = parts[1].replace(new RegExp(`[${parts[0]}]`,'g'), "").replace(/[#]/g,' ');
            output.value = parts[1];
        });
}