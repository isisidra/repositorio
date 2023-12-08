document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    const mensaje = document.getElementById('mensaje');

    setTimeout(() => {
        // Después de 1 segundo, cambia el fondo a un GIF
        contenedor.style.background = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJ6bXp4czQzNndubGMyMXMxY3Npdjd2cDJzb2Nqazhsamt6MXF2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/boNzmsxVblJWo/giphy.gif") center center fixed';
        contenedor.style.backgroundSize = 'cover';

        setTimeout(() => {
            // Después de 5 segundos, cambia el fondo a negro
            contenedor.style.background = 'black';

            setTimeout(() => {
                mensaje.style.display = 'block';
            }, 3500); // Ajusta el tiempo según tus necesidades
        }, 3000); // 5 segundos para mostrar el GIF
    }, 3000); // 1 segundo para mostrar el fondo negro
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