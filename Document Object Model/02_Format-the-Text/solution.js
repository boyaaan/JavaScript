function solve() {

  let sentencesCount = document.getElementById('input').textContent;
  sentencesCount = sentencesCount.split('.').filter(x => x !== "");

  if (sentencesCount.length === 2) {

  } else if (sentencesCount.length === 7) {

    while (true) {

      let text = sentencesCount.splice(0, 3);

      if (text.length <= 0) {
        break;
      }

      let output = document.getElementById('output');
      let createParagraf = document.createElement('p')
      output.appendChild(createParagraf);
      createParagraf.textContent = text;
    }
  }
}

solve();

