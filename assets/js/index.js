// Habilita tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

window.onload = function () {
  // Código para cambiar opacidad de navbar al hacer scroll down 
  let i = 0;
  let oldScroll = 0;
  let tictac = false;

  document.addEventListener('scroll', e => {
    oldScroll = window.scrollY;

    if (!tictac) {
      window.requestAnimationFrame(() => {

        i = window.scrollY / 1000;
        document.querySelector('.navbar').style.backgroundColor = `rgba(23,163,187,${i}`;
        tictac = false;
      });

      tictac = true;
    }
  })

  // funcion que ajusta el tamaño de la imagen 2 a las otras 3, 
  // sin importar el tamano del viewport
  const ajustarImagen =  () => {
    let imagenes = document.getElementsByClassName('card-img-top');
    imagenes[1].style.height = window.getComputedStyle(imagenes[0]).height;
    // imagenes.forEach(e => console.log(window.getComputedStyle(e).height));
  };

  ajustarImagen(); // al cargar
  window.addEventListener('resize', ajustarImagen); // al ajustar la ventana del browser

}