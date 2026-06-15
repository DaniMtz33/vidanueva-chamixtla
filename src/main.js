document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Consumimos el JSON que modificará el CMS
    const response = await fetch('/data/contacto.json');
    const data = await response.json();

    // Inyectamos los datos en el HTML si los elementos existen
    if(document.getElementById('hero-frase')) {
      document.getElementById('hero-frase').innerText = data.frase_hero;
    }
    if(document.getElementById('info-direccion')) {
      document.getElementById('info-direccion').innerHTML = `📍 <strong class="text-white">Dirección:</strong> ${data.direccion}`;
    }
    if(document.getElementById('info-telefono')) {
      document.getElementById('info-telefono').innerHTML = `📞 <strong class="text-white">Teléfono:</strong> ${data.telefono}`;
    }
    if(document.getElementById('btn-whatsapp')) {
      document.getElementById('btn-whatsapp').href = data.whatsapp;
    }
  } catch (error) {
    console.error("Error cargando los datos de configuración:", error);
  }
});