const express = require('express');
const app = express();
const PORT = 8080;

// Sirve archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta para la página de inicio de sesión
app.get('/', (req, res) => {
  res.sendFile('Login.html', { root: __dirname });
});

// Resto de la configuración y rutas de tu aplicación

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
