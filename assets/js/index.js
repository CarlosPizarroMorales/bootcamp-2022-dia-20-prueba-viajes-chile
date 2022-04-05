// Codigo desafio prueba Viajes Chile
let i = 0;
let oldScroll = 0;
let tictac = false;

document.addEventListener('scroll', e => {
  oldScroll = window.scrollY;

  if (!tictac) {
    window.requestAnimationFrame(() => {
      i = window.scrollY / 1000;
      document.body.childNodes[5].style.backgroundColor = `rgba(23,163,187,${i}`;
      tictac = false;
    });

    tictac = true;
  }
})


