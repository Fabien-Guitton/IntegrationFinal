document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("bouton_burger");
    const menu_burger = document.getElementById("menu_burger");
    const fermer = document.getElementById("fermer");

    burgerMenu.addEventListener("click", () => {
        menu_burger.style.left = "0";
    });

    fermer.addEventListener("click", () => {
        menu_burger.style.left = "-250px";
    });

    const checkWindowSize = () => {
        if (window.innerWidth > 1000) {
            menu_burger.style.left = "-250px";
        }
    };

    window.addEventListener("resize", checkWindowSize);

    checkWindowSize();
});
