function efectoEscritura(elemento, textos, velocidad, pausaEntreTextos) {
    let textoActual = 0;
    let i = 0;
    let estaBorrando = false;

    function escribir() {
        if (textoActual >= textos.length) {
            textoActual = 0; // Reinicia al primer texto después del último
        }

        let textoCompleto = textos[textoActual];
        let textoParcial = textoCompleto.substring(0, i);

        if (!estaBorrando) {
            elemento.innerHTML = textoParcial; // Actualizado para remover el '_'
            i++;
            if (textoParcial === textoCompleto) {
                estaBorrando = true;
                setTimeout(escribir, pausaEntreTextos); // Pausa al finalizar antes de borrar
            } else {
                setTimeout(escribir, velocidad);
            }
        } else {
            elemento.innerHTML = textoParcial; // Actualizado para remover el '_'
            i--;
            if (textoParcial === "") {
                estaBorrando = false;
                textoActual++;
                setTimeout(escribir, velocidad);
            } else {
                setTimeout(escribir, velocidad / 2); // Borrar más rápido
            }
        }
    }

    escribir();
}

document.addEventListener("DOMContentLoaded", (event) => {
    const elementoParaEscribir = document.getElementById("texto-escritura");
    const textosParaEscribir = [
        "Programming Master",
        "Backend",
        "Javascript",
        "Docker",
        "MongoDb",
        "Betis",
    ];
    const velocidadEscritura = 100;
    const pausaEntreTextos = 2000;

    efectoEscritura(
        elementoParaEscribir,
        textosParaEscribir,
        velocidadEscritura,
        pausaEntreTextos
    );
});
