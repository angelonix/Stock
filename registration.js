document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var newUser = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    var storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[newUser]) {
        document.getElementById('registration-message').textContent = 'El usuario ya existe. Elige otro nombre de usuario.';
    } else {
        // Aquí es donde se puede mejorar la seguridad almacenando contraseñas de manera más segura
        // Podrías considerar técnicas como hash + salt para almacenar contraseñas de forma más segura
        storedUsers[newUser] = newPassword; // Esta es una forma básica de almacenamiento

        localStorage.setItem('users', JSON.stringify(storedUsers));

        document.getElementById('registration-message').textContent = 'Registro exitoso. Puedes iniciar sesión ahora.';
    }
});
