// Array para almacenar los productos
let productos = [];

// Cargar productos almacenados al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    const storedProducts = localStorage.getItem('productos');

    if (storedProducts) {
        productos = JSON.parse(storedProducts);
        actualizarTablaProductos();
    }
});
// Función para filtrar productos
function filtrarProductos(texto) {
    const productosFiltrados = productos.filter(producto => {
        const marca = producto.marca.toLowerCase();
        const modelo = producto.modelo.toLowerCase();
        const talla = producto.talla.toLowerCase();
        const filtro = texto.toLowerCase();

        return marca.includes(filtro) || modelo.includes(filtro) || talla.includes(filtro);
    });

    mostrarProductosFiltrados(productosFiltrados);
}

// Función para mostrar los productos filtrados en la tabla
function mostrarProductosFiltrados(productosFiltrados) {
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = ""; // Limpiar la tabla

    for (const producto of productosFiltrados) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.talla}</td>
            <td>
                <button class="btn btn-primary" onclick="mostrarEditarProducto(${producto.id})">Editar</button>
                <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;

        tablaProductos.appendChild(fila);
    }
}

// Función para mostrar el formulario al agregar producto
function mostrarFormularioAgregar() {
    $('#agregarProductoModal').modal('show');
}
// Función para agregar un producto desde el formulario
function agregarProductoDesdeFormulario() {
    const marca = document.getElementById("marcaForm").value;
    const modelo = document.getElementById("modeloForm").value;
    const talla = document.getElementById("tallaForm").value;

    const id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;

    const nuevoProducto = { id, marca, modelo, talla };

    productos.push(nuevoProducto);

    actualizarTablaProductos();

    $('#agregarProductoModal').modal('hide');
}
// Función para validar que solo se ingresen números en el campo de la talla
function validarTalla(event) {
    const input = event.target;
    const valor = input.value.trim();
    const num = /^\d*$/; // Expresión regular que verifica si son números enteros

    if (!num.test(valor)) {
        input.value = valor.slice(0, -1); // Eliminar el último carácter no numérico ingresado
    }
}

// Función para actualizar la tabla de productos
function actualizarTablaProductos() {
    const tablaProductos = document.getElementById("tablaProductos");
    tablaProductos.innerHTML = ""; // Limpiar la tabla

    for (const producto of productos) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.talla}</td>
            <td>
                <button class="btn btn-primary" onclick="mostrarEditarProducto(${producto.id})">Editar</button>
                <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;

        tablaProductos.appendChild(fila);
    }

    guardarProductos(); // Guardar productos actualizados en localStorage después de cada actualización
}

// Función para guardar los productos en el localStorage
function guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Función para mostrar el formulario de edición de un producto
function mostrarEditarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        document.getElementById("editarID").value = producto.id;
        document.getElementById("editarMarca").value = producto.marca;
        document.getElementById("editarModelo").value = producto.modelo;
        document.getElementById("editarTalla").value = producto.talla;
        $('#editarProductoModal').modal('show');
    }
}

// Función para editar un producto
function editarProducto() {
    const id = parseInt(document.getElementById("editarID").value);
    const marca = document.getElementById("editarMarca").value;
    const modelo = document.getElementById("editarModelo").value;
    const talla = document.getElementById("editarTalla").value;

    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex !== -1) {
        productos[productoIndex] = { id, marca, modelo, talla };
        actualizarTablaProductos();
        $('#editarProductoModal').modal('hide');
    }
}

// Función para eliminar un producto
function eliminarProducto(id) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmacion) {
        productos = productos.filter(p => p.id !== id);
        actualizarTablaProductos();
    }
}

// Lógica adicional para la gestión de productos...
