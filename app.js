const usuariosRegistrados = [
    { username: 'user1', password: '123' },
    { username: 'user2', password: '456' }
];

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const errorMessage = document.getElementById("error-message");
const registrationMessage = document.getElementById("registration-message");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuarioEncontrado = usuariosRegistrados.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        window.location.href = "main.html"; 
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
});

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Agrega el nuevo usuario a la lista temporal
    usuariosRegistrados.push({ username: newUsername, password: newPassword });
    registrationMessage.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
});
