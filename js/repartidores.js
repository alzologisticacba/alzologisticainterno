async function consultar() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  resultado.classList.remove("resultado-activo");

  if (!codigo) {
    resultado.innerHTML = "<p>Ingrese un código válido.</p>";
    resultado.classList.add("resultado-activo");
    return;
  }

  resultado.innerHTML = '<div class="spinner"></div>';
  resultado.classList.add("resultado-activo");

  try {
    
    const url = `https://script.google.com/macros/s/AKfycbx110BX4ej3zrL-AGK6CZsZxs-ObrSedObVon7n5wX81fYJCT2QZ2AKfdmT5PufPN_a/exec?codigo=${encodeURIComponent(codigo)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      resultado.innerHTML = `<p><strong>Error:</strong> ${data.error}</p>`;
    } else {
      resultado.innerHTML = `
        <p><strong>Código:</strong> ${data.codigo}</p>
        <p><strong>Razón Social:</strong> ${data.razonSocial}</p>
        <p><strong>Dirección:</strong> ${data.direccion}</p>
        <p><strong>Teléfono Cliente:</strong><a href="https://wa.me/54${data.telefonoCliente}" target="_blank" class="wsp-link"><i class="fab fa-whatsapp"></i> ${data.telefonoCliente}</a></p>
        <p><strong>Repartidor anterior:</strong> ${data.repartidorAnterior}</p>
        <p><strong>Teléfono Repartidor:</strong> <a href="https://wa.me/54${data.telefonoRepartidor}" target="_blank" class="wsp-link"><i class="fab fa-whatsapp"></i> ${data.telefonoRepartidor}</a></p>
        <p><strong>Vendedor anterior:</strong> ${data.vendedorAnterior}</p>
        <p><strong>Teléfono Vendedor:</strong> <a href="https://wa.me/54${data.telefonoVendedor}" target="_blank" class="wsp-link"><i class="fab fa-whatsapp"></i> ${data.telefonoVendedor} </a></p>
        <p><strong>Horario Apertura:</strong> ${data.horarioApertura}</p>
        <p><strong>Horario Cierre:</strong> ${data.horarioCierre}</p>
        <p><strong>Cierra Mediodía:</strong> ${data.cierreMediodia}</p>
        <p><strong>Pago Mañana/Tarde:</strong> ${data.pagaMananaTarde}</p>
        <p><strong>Transferencia Confiable:</strong> ${data.transferenciaConfiable}</p>
        <p><strong>Comentarios:</strong> ${data.comentarios}</p>
      `;
    }

    resultado.classList.add("resultado-activo");
  } catch (err) {
    resultado.innerHTML = "<p><strong>Error:</strong> No se pudo acceder al servidor.</p>";
    resultado.classList.add("resultado-activo");
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn-consultar");
  if (boton) {
    boton.addEventListener("click", consultar);
  }
});