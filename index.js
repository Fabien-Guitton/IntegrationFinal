bootstrap.Tooltip.VERSION // => "5.3.0"

// Attendre que le DOM soit chargé avant l'initialisation
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#carousel1');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000, // Temps entre les transitions
            wrap: true, // Permet de boucler après la dernière slide
            keyboard: true // Active la navigation avec le clavier
        });
    }
});