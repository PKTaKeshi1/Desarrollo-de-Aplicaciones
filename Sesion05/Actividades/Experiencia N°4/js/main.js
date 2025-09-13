document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
      alert('Por favor completa nombre y correo.');
      return;
    }
    alert('Formulario enviado (simulado).');
    form.reset();
  });
}
