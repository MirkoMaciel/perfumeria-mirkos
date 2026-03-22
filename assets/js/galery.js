// 1. Definí acá las rutas de tus fotos locales
const imagenes = [
    "assets/img/perfumes/club_nuit_sillage.jpeg",
    "assets/img/perfumes/spectre_ghost.jpeg",
    "assets/img/perfumes/yum_yum.jpeg",
    "assets/img/perfumes/yara_pink_elixir.jpeg"
];

let indiceActual = 0;

// 2. Referencias a los elementos del HTML
const fotoContenedor = document.querySelector('.galery_photo');
const btnPrev = document.querySelector('.prevButton');
const btnNext = document.querySelector('.nextButton');
const footerTexto = document.querySelector('.photo_footer');

// 3. Función para cambiar la imagen
function cambiarImagen(paso) {
    indiceActual += paso;

    // Lógica infinita (si llega al final, vuelve al principio)
    if (indiceActual >= imagenes.length) indiceActual = 0;
    if (indiceActual < 0) indiceActual = imagenes.length - 1;

    // Aplicamos la imagen como fondo
    fotoContenedor.style.backgroundImage = `url('${imagenes[indiceActual]}')`;
    
    // Opcional: Actualizar el pie de foto
    //footerTexto.innerText = `Imagen ${indiceActual + 1} de ${imagenes.length}`;
}

// 4. Eventos de los botones
btnNext.addEventListener('click', () => cambiarImagen(1));
btnPrev.addEventListener('click', () => cambiarImagen(-1));

// 5. Cargar la primera imagen al iniciar
cambiarImagen(0);