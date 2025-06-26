document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const clave = document.getElementById('clave').value;
        const clave2 = document.getElementById('clave2').value;
        const exito = document.getElementById('registro-exito');
        if (clave !== clave2) {
            exito.style.display = "block";
            exito.style.background = "#ffebee";
            exito.style.color = "#c62828";
            exito.textContent = "Las contraseñas no coinciden.";
            return;
        }
        // Aquí podrías guardar los datos en localStorage o enviarlos a un servidor real
        exito.style.display = "block";
        exito.style.background = "#e8f5e9";
        exito.style.color = "#388e3c";
        exito.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1800);
    });
});