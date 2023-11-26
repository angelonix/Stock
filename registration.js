document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    var newUser = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    // Obtener los usuarios almacenados (si existen)
    var storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Verificar si el usuario ya existe
    if (storedUsers[newUser]) {
        document.getElementById('registration-message').textContent = 'El usuario ya existe. Elige otro nombre de usuario.';
    } else {
        // Guardar en localStorage
        storedUsers[newUser] = newPassword;
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Mostrar mensaje de registro exitoso
        document.getElementById('registration-message').textContent = 'Registro exitoso. Puedes iniciar sesión ahora.';
    }
});
