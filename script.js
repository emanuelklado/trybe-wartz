const buttonLogin = document.getElementById('entrar');
const loginAdress = document.getElementById('login-email');
const password = document.getElementById('login-senha');
const buttonSubmit = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

function alerta() {
  if (loginAdress.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', alerta);

function enableButton() {
  if (agree.checked === true) {
    buttonSubmit.removeAttribute('disabled');
  }
}

agree.addEventListener('input', enableButton);
