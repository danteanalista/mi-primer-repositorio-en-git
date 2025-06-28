let intentosUsuario = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value.trim();
        const clave = document.getElementById('clave').value;
        const clave2 = document.getElementById('clave2').value;
        const exito = document.getElementById('registro-exito');

        // Validación usuario: solo números
        if (!/^\d+$/.test(usuario)) {
            intentosUsuario++;
            exito.style.display = "block";
            exito.style.background = "#ffebee";
            exito.style.color = "#c62828";
            exito.textContent = "El usuario solo debe contener números.";
            if (intentosUsuario >= 3) {
                alert("Has superado el número de intentos. El usuario solo puede contener números.");
                intentosUsuario = 0;
            }
            return;
        }

        // Validación contraseña: mínimo 7 caracteres y al menos una mayúscula
        if (clave.length < 7 || !/[A-Z]/.test(clave)) {
            exito.style.display = "block";
            exito.style.background = "#ffebee";
            exito.style.color = "#c62828";
            exito.textContent = "La contraseña debe tener al menos 7 caracteres y una mayúscula.";
            return;
        }

        // Validación de coincidencia de contraseñas
        if (clave !== clave2) {
            exito.style.display = "block";
            exito.style.background = "#ffebee";
            exito.style.color = "#c62828";
            exito.textContent = "Las contraseñas no coinciden.";
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.some(u => u.usuario === usuario)) {
            exito.style.display = "block";
            exito.style.background = "#ffebee";
            exito.style.color = "#c62828";
            exito.textContent = "El usuario ya existe.";
            return;
        }
        usuarios.push({ usuario, clave });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        exito.style.display = "block";
        exito.style.background = "#e8f5e9";
        exito.style.color = "#388e3c";
        exito.textContent = "¡Registro exitoso! Ahora puedes iniciar sesión.";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1800);
    });
});