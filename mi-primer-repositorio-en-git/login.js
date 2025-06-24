let intentos = 0;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const clave = document.getElementById('clave').value.trim();
        const mensaje = document.getElementById('mensaje-error');
        const toggleBtn = document.getElementById('toggleClave');
        // Usuario y clave de ejemplo
        if (usuario === "courvoisier" && clave === "1234") {
            mensaje.style.display = "none";
            window.location.href = "cuenta.html";
            // window.location.href = "panel.html";
            intentos = 0; // Reinicia los intentos si el login es correcto
        } else {
            intentos++;
            mensaje.style.display = "block";
            if (intentos >= 3) {
                alert("Demasiados intentos fallidos, por favor intente más tarde");
                // Puedes deshabilitar el botón si quieres:
                // form.querySelector('button[type=\"submit\"]').disabled = true;
            }
        }
    });
});