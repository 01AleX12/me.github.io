/* animacion de barra y texto | */
var typed = new Typed(".animated-text", {
  strings: ["Alejandro Aranda Galan", "aag.devv@gmail.com"],
  typeSpeed: 85,                
  backSpeed: 85,
  backDelay: 1000,
  loop: true
})

/* animacion scroll */

const arrowIcon = document.querySelector(".bi-arrow-down-circle-fill");

arrowIcon.addEventListener("click", () => {
  // Usamos GSAP para realizar el desplazamiento suave
  gsap.to(window, {
    scrollTo: { y: "main", offsetY: 0 }, // Desplaza hacia el elemento <main>
    duration: 1 // Duración del desplazamiento en segundos
  });
});

/* repetir texto de los markee */
