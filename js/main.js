// Variables globales
let productoSeleccionado = '';
let precioSeleccionado = 0;

// Función para seleccionar producto
function seleccionarProducto(nombre, precio) {
    productoSeleccionado = nombre;
    precioSeleccionado = precio;
    
    // Actualizar campo del formulario
    const inputProducto = document.getElementById('producto');
    if (inputProducto) {
        inputProducto.value = nombre;
    }
    
    // Mostrar mensaje de confirmación
    Swal.fire({
        title: '¡Producto Seleccionado!',
        text: `Has seleccionado: ${nombre} - ${precio}bs`,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000
    });
    
    // Desplazar al formulario
    document.getElementById('pedidos').scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para enviar por WhatsApp
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const cantidad = document.getElementById('cantidad').value;
    const direccion = document.getElementById('direccion').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!productoSeleccionado) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor selecciona un producto primero',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    
    if (!nombre || !telefono || !direccion) {
        Swal.fire({
            title: 'Datos Incompletos',
            text: 'Por favor completa todos los campos requeridos',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return;
    }
    
    const total = precioSeleccionado * parseInt(cantidad);
    
    // Crear mensaje para WhatsApp
    const mensajeWhatsApp = `*NUEVO PEDIDO - POSTRES MEJISHET*%0A%0A` +
                           `*Nombre:* ${nombre}%0A` +
                           `*Teléfono:* ${telefono}%0A` +
                           `*Producto:* ${productoSeleccionado}%0A` +
                           `*Cantidad:* ${cantidad}%0A` +
                           `*Precio unitario:* ${precioSeleccionado}bs%0A` +
                           `*Total:* ${total}bs%0A` +
                           `*Dirección:* ${direccion}%0A` +
                           `*Mensaje:* ${mensaje || 'Sin mensaje adicional'}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/59174005712?text=${mensajeWhatsApp}`, '_blank');
}

// Manejar envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const pedidoForm = document.getElementById('pedidoForm');
    
    if (pedidoForm) {
        pedidoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            
            if (!productoSeleccionado) {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor selecciona un producto primero',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
            
            if (!nombre || !telefono || !direccion) {
                Swal.fire({
                    title: 'Datos Incompletos',
                    text: 'Por favor completa todos los campos requeridos',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
                return;
            }
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora solo mostraremos una confirmación
            
            const cantidad = document.getElementById('cantidad').value;
            const total = precioSeleccionado * parseInt(cantidad);
            
            Swal.fire({
                title: '¡Pedido Enviado!',
                html