function mostrarDespuesDe5Segundos() {
    var miElementou = document.getElementById("miElementou");
    miElementou.style.display = "block";
}
setTimeout(mostrarDespuesDe5Segundos, 3000);

let selectedProducts = [];
const productData = {
    1: "Hamburguesa",
    2: "Pollo frito",
    3: "Pizza",
    4: "Helado",
    5: "Ensalada",
    6: "Pescado"
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
    const url = `redirigida.html?suma=${sumaTotal}`;
    
    // Redirige a la página de pago
    window.location.href = url;
}


//otra pagina
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });



  