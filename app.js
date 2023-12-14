document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;

    var storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (storedUsers[inputUsername] === inputPassword) {
        // Credenciales válidas, iniciar sesión
        sessionStorage.setItem('loggedIn', 'true'); // Almacena el estado de inicio de sesión en sessionStorage

        // Redirigir a la página principal
        window.location.href = 'Almacén.html';
    } else {
        // Credenciales inválidas, mostrar mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
