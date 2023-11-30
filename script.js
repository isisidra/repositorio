let selectedProducts = [];

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
        buttonElement.textContent = `Producto ${productId}`;
        selectedButtonsElement.appendChild(buttonElement);

        // Suma el valor del producto
        sumaTotal += productId;
    }

}

function redirectToPayment() {
    // Pasa la suma como parámetro en la URL
    const sumaTotal = selectedProducts.reduce((suma, productId) => suma + productId, 0);
    const url = `newone.html?suma=${sumaTotal}`;
    
    // Redirige a la página de pago
    window.location.href = url;
}
