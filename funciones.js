let selectedProducts = {};
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
    if (!selectedProducts[productId]) {
        selectedProducts[productId] = 1; // Inicializa la cantidad a 1 si es la primera vez que se agrega
    } else {
        selectedProducts[productId]++; // Incrementa la cantidad si ya estaba en el carro
    }

    updateSelectedButtons();
}

function updateSelectedButtons() {
    const selectedButtonsElement = document.getElementById('selected-buttons');
    selectedButtonsElement.innerHTML = '<h2>Tu orden</h2>';
    
    let sumaTotal = 0;

    for (const productId in selectedProducts) {
        const buttonElement = document.createElement('div');
        const productName = productData[productId] || "Producto Desconocido";
        const quantity = selectedProducts[productId];
        buttonElement.textContent = `Producto: ${productName} x${quantity}`;
        selectedButtonsElement.appendChild(buttonElement);
        // Suma el valor del producto multiplicado por la cantidad
        sumaTotal += productId * quantity;
    }

    sumarNumerosBotones(sumaTotal);
}

function redirectToPayment() {
    const sumaTotal = Object.entries(selectedProducts).reduce((suma, [productId, quantity]) => suma + productId * quantity, 0);

    if (sumaTotal < 20) {
        window.location.href = "pagina_redirigida.html";
    } else if (sumaTotal >= 20 && sumaTotal < 60) {
        window.location.href = "pr2.html";
    } else {
        window.location.href = "pr3.html";
    }
}

function sumarNumerosBotones(sumaTotal) {
    document.getElementById('total-numeros').textContent = sumaTotal;
}