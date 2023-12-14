document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');
    const totalDelay = circles.length;
  
    circles.forEach((circle, index) => {
      circle.style.animationDelay = `${index}s`; // Ajusta la animación-delay
    });
  
    // Ajusta la duración total de la animación
    document.body.style.animationDuration = `${totalDelay}s`;
  });
  