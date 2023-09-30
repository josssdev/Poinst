// Información dinámica para mostrar en la bienvenida
const informacionPueblo = {
    titulo: "Descubre la Belleza y Tradición",
    contenido: "Bienvenido a nuestro encantador pueblo, un lugar lleno de historia, cultura y paisajes asombrosos. Nuestra comunidad se enorgullece de su rica herencia y la calidez de sus habitantes.",
  };
  
  // Actualizar el contenido de la sección de información con la información del pueblo
  window.addEventListener("load", function() {
    const infoSection = document.getElementById("info");
    infoSection.innerHTML = `
      <h2>${informacionPueblo.titulo}</h2>
      <p>${informacionPueblo.contenido}</p>
    `;
  });
  