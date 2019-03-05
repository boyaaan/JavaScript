function register() {
  let result = document.querySelector('#container #result');

  let patternEmail = new RegExp(".+@.+.[com bg]");

  let userName = document.querySelector('#exercise form input[type="text"]').value;
  let email = document.querySelector('#exercise form input[type="email"]').value.match(patternEmail);
  let password = document.querySelector('#exercise form input[type="password"]').value;

  if (userName && email && password) {
    let createTagH1 = document.createElement('h1');
    result.appendChild(createTagH1);
    createTagH1.innerText = 'Successful Registration!';

    let input = document.createTextNode(`Username: ${userName}`);
    result.appendChild(input);
    putNewLine(result);
    input = document.createTextNode(`Email: ${email}`);
    result.appendChild(input);
    putNewLine(result);
    input = document.createTextNode(`Password: ${"*".repeat(password.length)}`);
    result.appendChild(input);

    clearInputs();

    setTimeout(function () {
      while (result.firstChild) {
        result.removeChild(result.firstChild)
      }
    }, 5000);
  }

  function putNewLine(result) {
    let br = document.createElement('br');
    result.appendChild(br);
  }

  function clearInputs() {
    userName = document.querySelector('#exercise form input[type="text"]').value = '';
    email = document.querySelector('#exercise form input[type="email"]').value = '';
    password = document.querySelector('#exercise form input[type="password"]').value = '';
  }
}
