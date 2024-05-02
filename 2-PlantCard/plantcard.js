const hamMenu = document.getElementById('hamburguer');
const botaoMenu = document.getElementById('imagem4');

function clickMenu() {
    // Obtém o estilo computado do elemento
    const computedStyle = window.getComputedStyle(hamMenu);

    // Verifica se o elemento está sendo exibido ou oculto
    if (computedStyle.display === "none") {
        console.log("Olá, mundo!")
        hamMenu.style.display = "flex";
    } else {
        hamMenu.style.display = "none";
    }
}

botaoMenu.addEventListener("click", clickMenu);