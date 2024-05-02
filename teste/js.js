function esconde(el) {
    document.getElementById(el).style.display = 'none';
}

function mostra(el) {
    document.getElementById(el).style.display = 'block';
}

function toggle(el) {
    var elemento = document.getElementById(el);
    var display = elemento.style.display;
    if (display === "none" || display === "") {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}
