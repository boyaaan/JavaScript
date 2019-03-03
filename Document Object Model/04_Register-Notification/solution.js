function register() {
  let patternUserName = new RegExp("[a-zA-Z]+");
  let patternEmail = new RegExp("(.+)@(.+).(com|bg)");
  let patternPassword = new RegExp(".+");
  let result = document.querySelector('#container #result');

  let userName = document.querySelector('#exercise form input[type="text"]').value.match(patternUserName);
  let email = document.querySelector('#exercise form input[type="email"]').value.match(patternEmail);
  let password = document.querySelector('#exercise form input[type="password"]').value.match(patternPassword);

  if (userName && email && password) {
    let createTagH1 = document.createElement('h1');
    result.appendChild(createTagH1).textContent = 'Successful Registration!';
    let createTagdiv = document.createElement('div');
     result.appendChild(createTagdiv).textContent = `Username: ${userName}`;
     let createTagdiv1 = document.createElement('div');
     result.appendChild(createTagdiv1).textContent = `Email: ${email[0]}`;
     let createTagDiv2 = document.createElement('div');
     result.appendChild(createTagDiv2).textContent = `Password: ${"*".repeat(password[0].length)}`;

    clearInputs();
  }

  function clearInputs() {
    userName = document.querySelector('#exercise form input[type="text"]').value = '';
    email = document.querySelector('#exercise form input[type="email"]').value = '';
    password = document.querySelector('#exercise form input[type="password"]').value = '';
  }
}
