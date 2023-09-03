const menu = document.querySelector(".menu");
const teste = document.querySelector(".teste");
teste.addEventListener("click", () => {
    menu.classList.toggle("active");
})

function hide() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer__video');
    trailer.classList.toggle('trailer--is--active');
    video.currentTime = 0;
    video.pause();
}

