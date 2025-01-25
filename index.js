document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");

    // Ouvre le menu latéral
    burgerMenu.addEventListener("click", () => {
        sideMenu.style.left = "0";
    });

    // Ferme le menu latéral
    closeMenu.addEventListener("click", () => {
        sideMenu.style.left = "-250px";
    });

    // Fonction pour vérifier la taille de la fenêtre
    const checkWindowSize = () => {
        if (window.innerWidth > 1000) {
            // Si la fenêtre est plus large que 1000px, on ferme le menu
            sideMenu.style.left = "-250px";
        }
    };

    // Écouteur d'événements pour la redimensionnement de la fenêtre
    window.addEventListener("resize", checkWindowSize);

    // Vérifie la taille initiale de la fenêtre
    checkWindowSize();
});
