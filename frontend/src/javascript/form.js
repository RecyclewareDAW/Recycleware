document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('miFormulario');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // 1. Evitar el envío real a toda costa
            event.preventDefault();
            event.stopPropagation();

            // 2. Validar con Bootstrap
            if (!this.checkValidity()) {
                this.classList.add('was-validated');
                return; // Si faltan datos, termna
            }

            // 3. Simular el envío exitoso
            console.log("Formulario válido. Mostrando mensaje de éxito...");
            
            // Ocultamos el form y mostramos el mensaje
            this.style.display = 'none'; 
            document.getElementById('mensajeExito').style.display = 'block'; 
        });
    } else {
        console.error("Error: No se encontró el formulario en el HTML.");
    }

});