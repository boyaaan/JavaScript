function solve() {
   let button = document.querySelector("#exercise div:nth-child(2) button");
let count = 0;

button.addEventListener("click", function bobi() {
   let textParagraf = '';
      count++;
      if (count === 1) {
         textParagraf = document.querySelector('#exercise p')
          .setAttribute("style", "color: blue; font-size: 2px");
       
      } else if (count === 2) {
         textParagraf = document.querySelector('#exercise p')
         .setAttribute("style", "color: green; font-size: 4px");
       
      } else if (count === 3) {
         textParagraf = document.querySelector('#exercise p')
         .setAttribute("style", "color: red; font-size: 6px");
         
         count = 0;
      }

      console.log(textParagraf);

});
}
