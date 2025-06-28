let intentos = 0;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const clave = document.getElementById('clave').value.trim();
        const mensaje = document.getElementById('mensaje-error');

        // Validación usuario: solo letras
       if (!/^\d+$/.test(usuario)) {
           mensaje.textContent = "El usuario solo debe contener números.";
           mensaje.style.display = "block";
           return;
}

        // Validación contraseña: mínimo 7 caracteres y al menos una mayúscula
        if (clave.length < 7 || !/[A-Z]/.test(clave)) {
            mensaje.textContent = "La contraseña debe tener al menos 7 caracteres y una mayúscula.";
            mensaje.style.display = "block";
            return;
        }

        // Validación contra usuarios registrados
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioValido = usuarios.find(u => u.usuario === usuario && u.clave === clave);

        if (usuarioValido) {
            mensaje.style.display = "none";
            window.location.href = "cuenta.html";
            intentos = 0;
        } else {
            intentos++;
            mensaje.textContent = "Usuario o contraseña incorrectos.";
            mensaje.style.display = "block";
            if (intentos >= 3) {
                alert("Demasiados intentos fallidos, por favor intente más tarde");
            }
        }
    });
});