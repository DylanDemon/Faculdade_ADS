// ================================
// VALIDAÇÃO DO FORMULÁRIO
// ================================
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensagem = form.querySelector('textarea').value;

    if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha nome, email e mensagem!');
      return;
    }

    alert('Mensagem enviada com sucesso, ' + nome + '! Em breve entraremos em contato.');

    form.reset();
  });
}


// ================================
// HEADER: SOMBRA + ESCONDER AO DESCER
// ================================
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // SOMBRA DINÂMICA
  if (scrollTop > 50) {
    header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }

  // ESCONDE AO DESCER / MOSTRA AO SUBIR
  if (scrollTop > lastScrollTop && scrollTop > 80) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
});


// ================================
// ANIMAÇÃO AO ROLAR (FADE-IN)
// ================================
const secoes = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

secoes.forEach(function (secao) {
  observer.observe(secao);
});
