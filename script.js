document.addEventListener('DOMContentLoaded', function () {
    // No hace nada durante 10 segundos
    setTimeout(() => {
        // Cambia el fondo a negro durante 5 segundos
        const contenedor = document.getElementById('contenedor');
        contenedor.style.backgroundColor = 'black';

        // Muestra el mensaje "Hola" después de 5 segundos
        setTimeout(() => {
            const mensaje = document.getElementById('mensaje');
            mensaje.style.display = 'block';
        }, 1000);
    }, 6000);
});



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
    
    

function redirectToPayment() {
    // Pasa la suma como parámetro en la URL
    const sumaTotal = selectedProducts.reduce((suma, productId) => suma + productId, 0);
    const url = `newone.html?suma=${sumaTotal}`;
    
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
  
// script.js
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.getElementsByClassName('miVideo').style.display = 'block';
    }, 3100);
});
}