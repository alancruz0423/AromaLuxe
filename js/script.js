document.addEventListener("DOMContentLoaded", function() {

    // Mensaje dinámico en index
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        const hora = new Date().getHours();
        if (hora < 12) mensaje.textContent = "Buenos días. Hoy es perfecto para una fragancia floral.";
        else if (hora < 18) mensaje.textContent = "Buenas tardes. Descubre aromas sofisticados.";
        else mensaje.textContent = "Buenas noches. Déjate envolver por el lujo.";
    }

    // Checkbox para habilitar registro
    const terminos = document.getElementById("terminos");
    const btnEnviar = document.getElementById("btnEnviar");
    if (terminos) {
        terminos.addEventListener("change", function() {
            btnEnviar.disabled = !this.checked;
        });
    }

    // Ver más info
    const verMas = document.getElementById("verMas");
    const infoExtra = document.getElementById("infoExtra");
    if (verMas) verMas.addEventListener("click", () => infoExtra.classList.toggle("oculto"));

    // Carrito dinámico
    let contador = 0;
    const botonesAgregar = document.querySelectorAll(".agregar");
    const spanContador = document.getElementById("contador");
    botonesAgregar.forEach(btn => {
        btn.addEventListener("click", function() {
            contador++;
            if (spanContador) spanContador.textContent = contador;
            btn.textContent = "✔ Agregado";
            btn.style.background = "white";
            setTimeout(() => {
                btn.textContent = "Agregar al carrito";
                btn.style.background = "gold";
            }, 1500);
        });
    });

    // Recalcular total en carrito
    const cantidades = document.querySelectorAll(".cantidad");
    const totalSpan = document.getElementById("total");
    if (cantidades.length > 0) {
        cantidades.forEach(input => {
            input.addEventListener("input", function() {
                let total = 0;
                const filas = document.querySelectorAll("table tr");
                filas.forEach((fila, index) => {
                    if (index > 0) {
                        const cantidad = fila.querySelector(".cantidad").value;
                        const precio = fila.querySelector(".precio").textContent;
                        total += cantidad * precio;
                    }
                });
                totalSpan.textContent = total;
            });
        });
    }

    // Búsqueda simulada
    const formBusqueda = document.getElementById("formBusqueda");
    const resultados = document.getElementById("resultados");
    if (formBusqueda) {
        formBusqueda.addEventListener("submit", function(e) {
            e.preventDefault();
            const texto = document.getElementById("buscar").value;
            resultados.innerHTML = `
                <p>Resultados para la búsqueda de <strong>${texto}</strong></p>
                <ul>
                    <li>Rose Éternelle</li>
                    <li>Wood Intense</li>
                    <li>Golden Oud</li>
                </ul>
            `;
        });
    }

    // Pago simulado
    const formPago = document.getElementById("formPago");
    if (formPago) {
        formPago.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Pago realizado con éxito. Gracias por tu compra de Aroma Luxe!");
            if (spanContador) spanContador.textContent = "0";
            contador = 0;
            formPago.reset();
        });
    }

});
