let selectedProducts = [];
const productData = {
    6: "Hamburguesa",
    4: "Pollo frito",
    2: "Pizza",
    3: "Helado",
    1: "Ensalada",
    5: "Pescado"
    // Agrega más productos según sea necesario
};

function addToCart(productId) {
    if (!selectedProducts.includes(productId)) {
        selectedProducts.push(productId);
        updateSelectedButtons();
    }
}

function updateSelectedButtons() {
    const selectedButtonsElement = document.getElementById('selected-buttons');
    selectedButtonsElement.innerHTML = '<h2>Botones Seleccionados</h2>';
    
    let sumaTotal = 0;

    for (const productId of selectedProducts) {
        const buttonElement = document.createElement('div');
        const productName = productData[productId] || "Producto Desconocido";
        buttonElement.textContent = `Producto: ${productName}`;
        selectedButtonsElement.appendChild(buttonElement);
        // Suma el valor del producto
        sumaTotal += productId;
    }
}

function redirectToPayment() {
    const sumaTotal = selectedProducts.reduce((suma, productId) => suma + productId, 0);
    const url = `pagina_redirigida.html?suma=${sumaTotal}`;
    
    // Redirige a la página de pago
    window.location.href = url;
}

function sumarNumerosBotones() {
    const sumaTotalNumeros = selectedProducts.reduce((suma, productId) => suma + productId, 0);
    document.getElementById('total-numeros').textContent = sumaTotalNumeros;
}

function addToCart(productId) {
    if (!selectedProducts.includes(productId)) {
        selectedProducts.push(productId);
        updateSelectedButtons();
        sumarNumerosBotones();  // Llama a la función después de agregar un producto
    }
}

function redirectToPayment() {
    const sumaTotal = selectedProducts.reduce((suma, productId) => suma + productId, 0);

    if (sumaTotal < 10) {
        window.location.href = "pagina_redirigida_baja.html";
    } else if (sumaTotal >= 10 && sumaTotal < 20) {
        window.location.href = "pagina_redirigida_media.html";
    } else {
        window.location.href = "pagina_redirigida_alta.html";
    }
}

function redirectToPayment() {
    const sumaTotal = selectedProducts.reduce((suma, productId) => suma + productId, 0);

    if (sumaTotal < 7) {
        window.location.href = "pagina_redirigida.html";
    } else if (sumaTotal >= 7 && sumaTotal < 14) {
        window.location.href = "pr2.html";
    } else {
        window.location.href = "pr3.html";
    }
}
