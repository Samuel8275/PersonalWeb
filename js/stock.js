function stock() {
    let v = parseInt(document.getElementById("stock").value);
    let stock = parseInt(document.getElementById("unidades").textContent);
    let alerta = document.getElementById("alerta");
    let msg = document.getElementById("msg");

    // Verificar si v es un número válido
    if (isNaN(v) || v <= 0) {
        msg.innerHTML = "Alerta: Por favor, ingrese un valor numerico."
        mostrarAlerta();
        return;
    }

    // Verificar si hay suficiente stock
    if (v > stock) {
        msg.innerHTML = "Alerta: No tenemos suficiente stock."
        mostrarAlerta();
        return;
    }

    // Actualizar el stock y mostrarlo
    stock -= v;
    document.getElementById("unidades").textContent = stock;

    // Limpiar el campo de entrada después de una compra exitosa
    document.getElementById("stock").value = "";
}

function cerrar() {
    ocultarAlerta();
}

function mostrarAlerta() {
    let alerta = document.getElementById("alerta");
    alerta.classList.remove("hide");
    alerta.classList.add("show");

    setTimeout(function () {
        ocultarAlerta();
    }, 6000);
}

function ocultarAlerta() {
    let alerta = document.getElementById("alerta");
    alerta.classList.remove("show");
    alerta.classList.add("hide");
}

function handleButtonClick(event) {
    event.preventDefault();
    stock(event);
}




