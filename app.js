document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;

    // Obtener los valores almacenados en localStorage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Verificar si las credenciales coinciden
    if (storedUsers[inputUsername] === inputPassword) {
        // Credenciales válidas, redireccionar a la página principal
        window.location.href = 'main.html';
    } else {
        // Credenciales inválidas, mostrar mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
