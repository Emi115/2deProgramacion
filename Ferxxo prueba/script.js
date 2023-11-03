document.addEventListener("DOMContentLoaded", function() {
    const mensajes = [
        "Re Re",
        "Reina",
        "Mi amor"," ",
        "Yo te extraño",
        "Bebé","...",
        "...",
        "Que hiueputa",
        "Chimba",
        "Seria",
        "Vernos",
        "Otra vez"
    ];

    const mensajeBtn = document.getElementById("mensajeBtn");
    const mensajeTexto = document.getElementById("mensajeTexto");

    mensajeBtn.addEventListener("click", () => {
        mensajes.forEach((mensaje, index) => {
            setTimeout(() => {
                mensajeTexto.textContent = mensaje;
                console.log(mensaje);

                if (mensaje === "Bebé") {
                    setTimeout(() => {
                        mensajeTexto.textContent = mensajeTexto.textContent;
                    }, 1000); // Pausa de 2 segundos cuando el mensaje es "Bebé"
                }
            }, index * 800);
        });
    });
});
