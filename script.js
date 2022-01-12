const buttonLogin = document.getElementById('entrar');
const loginAdress = document.getElementById('login-email');
const password = document.getElementById('login-senha');

function alerta() {
  if (loginAdress.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', alerta);
