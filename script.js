const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function trocarSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// trocar slide a cada 4 segundos
let slideInterval;

function iniciarSlideshow() {
  slideInterval = setInterval(trocarSlide, 4000);
}

// senha configurada aqui:
const senhaCorreta = "22062024";

function validarSenha() {
  const senha = document.getElementById('senhaInput').value;
  const erro = document.getElementById('errorMsg');

  if (senha === senhaCorreta) {
    // Esconde login, mostra entrada e conteúdo
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('entrada').style.display = 'block';
    document.getElementById('conteudo').style.display = 'block';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('congrats').style.display = 'block';

    iniciarSlideshow();
  } else {
    erro.textContent = "Senha incorreta, tente novamente.";
  }
}

// Permitir "Enter" para enviar senha
document.getElementById('senhaInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    validarSenha();
  }
});