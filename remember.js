document.getElementById('remember-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el usuario ingresado
    var userToRemember = document.getElementById('remember-username').value;

    // Obtener los usuarios almacenados del localStorage
    var storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Verificar si el usuario existe y mostrar la contraseña
    if (storedUsers[userToRemember]) {
        var password = storedUsers[userToRemember];
        document.getElementById('password-display').textContent = `La contraseña de ${userToRemember} es: ${password}`;
    } else {
        document.getElementById('password-display').textContent = 'No se encontró la contraseña para este usuario.';
    }
});
