
// Biblioteca


//interfaz
const archivo = document.getElementById("archivo");
const listaCanciones = document.getElementById("lista-canciones");
const audio = document.getElementById("audio");
const cancionActual = document.getElementById("cancion-actual");
const volumen = document.getElementById("volumen");

//Botones
const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnStop = document.getElementById("stop");

// Biblioteca
let canciones = [];


// Agregar canciones

archivo.addEventListener("change", (evento) => {

    for (const archivoMusica of evento.target.files) {

        canciones.push({
            nombre: archivoMusica.name,
            url: URL.createObjectURL(archivoMusica)
        });

    }

    mostrarCanciones();

});


// Mostrar canciones

function mostrarCanciones() {

    listaCanciones.innerHTML = "";

    canciones.forEach((cancion, indice) => {

        const item = document.createElement("li");

        item.innerHTML = `
            <span>🎵 ${cancion.nombre}</span>
            <div class="acciones">
                <button onclick="reproducirCancion(${indice})">▶</button>
                <button onclick="eliminarCancion(${indice})">❌</button>
            </div>
        `;

        listaCanciones.appendChild(item);

    });

}


// Reproducir canción

function reproducirCancion(indice) {

    audio.src = canciones[indice].url;
    audio.play();

    cancionActual.textContent =
        "Reproduciendo: " + canciones[indice].nombre;

}


// Eliminar canción

function eliminarCancion(indice) {

    canciones.splice(indice, 1);
    mostrarCanciones();

}


// Controles del reproductor


// iniciar
btnPlay.addEventListener("click", () => {
    audio.play();
});

// Pausa
btnPause.addEventListener("click", () => {
    audio.pause();
});

// parar
btnStop.addEventListener("click", () => {

    audio.pause();
    audio.currentTime = 0;

});

// Control de volumen

volumen.addEventListener("input", () => {

    audio.volume = volumen.value;

});
