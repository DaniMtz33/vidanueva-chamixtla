document.addEventListener("DOMContentLoaded", async () => {

  // --- Contact data from CMS ---
  try {
    const response = await fetch('/data/contacto.json');
    const data = await response.json();

    if (data.frase_hero && document.getElementById('hero-frase')) {
      document.getElementById('hero-frase').textContent = data.frase_hero;
    }

    if (data.direccion) {
      const el = document.getElementById('info-direccion');
      if (el) el.innerHTML = `
        <span class="text-xl mt-0.5">📍</span>
        <div>
          <p class="text-white font-semibold text-sm">Dirección</p>
          <p class="text-slate-400 text-sm">${data.direccion}</p>
        </div>`;
    }

    if (data.telefono) {
      const el = document.getElementById('info-telefono');
      if (el) el.innerHTML = `
        <span class="text-xl mt-0.5">📞</span>
        <div>
          <p class="text-white font-semibold text-sm">Teléfono</p>
          <p class="text-slate-400 text-sm">${data.telefono}</p>
        </div>`;
    }

    if (data.whatsapp && document.getElementById('btn-whatsapp')) {
      document.getElementById('btn-whatsapp').href = data.whatsapp;
    }
  } catch (err) {
    console.error("Error cargando datos de configuración:", err);
  }

  // --- Mobile menu toggle ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('[data-mobile-link]').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // --- Back to top button ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
