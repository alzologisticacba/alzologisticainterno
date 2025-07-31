

// Mostrar el pop-up automáticamente al cargar
window.addEventListener("DOMContentLoaded", mostrarPopup);

function irA(destino) {

  if (destino === "vendedores") {
    window.location.href = "vendedores.html"; // Cambiar por la ruta real
  } else if (destino === "repartidores") {
    window.location.href = "repartidores.html"; // Cambiar por la ruta real
  }
}