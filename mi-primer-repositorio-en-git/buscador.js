document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.buscador-header');
    if (!form) return;

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
});