document.addEventListener('DOMContentLoaded', function() {
    // Buscador
    const form = document.querySelector('.buscador-header');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = form.querySelector('input[type="text"]');
            if (!input) return;
            const query = input.value.trim().toLowerCase();

            const paginas = [
                { palabra: 'modalidad', url: 'modalidad.html' },
                { palabra: 'contacto', url: 'contacto.html' },
                { palabra: 'alumno', url: 'alumno.html' },
                { palabra: 'inicio', url: 'index.html' },
                { palabra: 'novedades', url: 'novedades.html' }
            ];

            const resultado = paginas.find(p => query.includes(p.palabra));
            if (resultado) {
                window.location.href = resultado.url;
            } else {
                alert('No se encontró ninguna página relacionada con: ' + query);
            }
        });
    }

    // Animación de aparición al hacer scroll para las tarjetas y secciones
    const animados = document.querySelectorAll('.modalidad-card, .content-section.animar-scroll');
    const mostrarAnimados = () => {
        animados.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    };
    animados.forEach(el => el.classList.add('animar-scroll'));
    window.addEventListener('scroll', mostrarAnimados);
    mostrarAnimados();
});
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').classList.add('visible');
});