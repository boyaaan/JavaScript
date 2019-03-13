function solve() {
   let buttons = document.getElementsByTagName('button');
   let output = document.querySelector('#output p');

   buttons[0].addEventListener('click', filter);
   buttons[1].addEventListener('click', sort);
   buttons[2].addEventListener('click', rotate);
   buttons[3].addEventListener('click', get);

   function filter() {
      let optionCommands = document.getElementById('filterSecondaryCmd').value;
      let filterPosition = document.getElementById('filterPosition').value;
      let input = document.getElementById('input').value.split('');;

      switch (optionCommands) {
         case 'uppercase':
            output.textContent += input.filter(x => x === x.toUpperCase())[filterPosition - 1];
            break;
         case 'lowercase':
            output.textContent += input.filter(x => x === x.toLowerCase())[filterPosition - 1];
            break;
         case 'nums':
            output.textContent += input.filter(x => x >= 0 && x <= 9)[filterPosition - 1];
            break;
      }
   }

   function sort() {
      let optionCommands = document.getElementById('sortSecondaryCmd').value;
      let sortPosition = document.getElementById('sortPosition').value;
      let input = document.getElementById('input').value.split('');

      switch (optionCommands) {
         case 'A':
            output.textContent += input.sort((a, b) => a.localeCompare(b))[sortPosition - 1];
            break;
         case 'Z':
            output.textContent += input.sort((a, b) => b.localeCompare(a))[sortPosition - 1];
            break;
      }
   }

   function rotate() {
      let rotateSecondary = document.getElementById('rotateSecondaryCmd').value;
      let rotatePosition = document.getElementById('rotatePosition').value;
      let input = document.getElementById('input').value.split('');

      for (let i = 0; i < Number(rotateSecondary) % input.length; i++) {
         let lastElement = input.pop();
         input.unshift(lastElement);
      }
      output.textContent += input[rotatePosition - 1];
   }

   function get() {
      let getPosition = Number(document.getElementById('getPosition').value);
      let input = document.getElementById('input').value.split('');
      output.textContent += input[getPosition - 1];
   }
}