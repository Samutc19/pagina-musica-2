console{
    "hola mundo"
}
const carrusel = document.querySelector(".carrusel");
const contenedorImagenes = document.querySelector(".contenedor-imagenes");
const botonesNavegacion = document.querySelector(".botones-navegacion");
const btnAnterior = document.querySelector(".anterior");
const btnSiguiente = document.querySelector(".siguiente");

let indiceActual = 0;

btnSiguiente.addEventListener("click", () => {
  if (indiceActual === contenedorImagenes.children.length - 1) {
    return;
  }

  indiceActual++;
  contenedorImagenes.classList.add("deslizando");
  contenedorImagenes.classList.add("a-la-izquierda");

  setTimeout(() => {
    contenedorImagenes.classList.remove("deslizando");
    contenedorImagenes.classList.remove("a-la-izquierda");
  }, 500);
});

btnAnterior.addEventListener("click", () => {
  if (indiceActual === 0) {
    return;
  }

  indiceActual--;
  contenedorImagenes.classList.add("deslizando");
  contenedorImagenes.classList.add("a-la-derecha");

  setTimeout(() => {
    contenedorImagenes.classList.remove("deslizando");
    contenedorImagenes.classList.remove("a-la-derecha");
  }, 500);
});
