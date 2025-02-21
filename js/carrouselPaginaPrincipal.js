const btnLeft = document.querySelector(".botonizq");
const btnRight = document.querySelector(".botonder");
const slider = document.querySelector("#slider");
const sliderSections = document.querySelectorAll(".sliderSection");

let index = 0;
const totalSlides = sliderSections.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Botón izquierdo (retroceder)
btnLeft.addEventListener("click", () => {
    index = (index === 0) ? totalSlides - 1 : index - 1;
    updateSlider();
});

// Botón derecho (avanzar)
btnRight.addEventListener("click", () => {
    index = (index === totalSlides - 1) ? 0 : index + 1;
    updateSlider();
});

// Asegurar que el slider comience en la primera imagen correctamente
updateSlider();
