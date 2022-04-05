// Codigo desafio prueba Viajes Chile
// Habilita tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Código para cambiar opacidad de navbar
// al hacer scroll down 
// let i = 0;
let oldScroll = 0;
let tictac = false;

document.addEventListener('scroll', e => {
  oldScroll = window.scrollY;

  if (!tictac) {
    window.requestAnimationFrame(() => {
      // i = window.scrollY / 1000;
      document.body.childNodes[5].style.backgroundColor = `rgba(23,163,187,${window.scrollY / 1000}`;
      tictac = false;
    });

    tictac = true;
  }
})


