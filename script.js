const boton = document.querySelector(".btn");
const musica = document.getElementById("musica");
const control = document.getElementById("playPause");

boton.addEventListener("click", () => {

    musica.play();

});

control.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        alert("Música reproducida");
        control.textContent = "⏸ Pausar música";

    } else {

        musica.pause();
        alert("Música pausada");
        control.textContent = "▶ Reproducir música";

    }

});

const fechaEvento = new Date("Mar 27, 2026 00:00:00").getTime();

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}, 1000);

// Efecto de chispas (sparkles) para el hero
function crearChispa() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const chispa = document.createElement('div');
    chispa.style.width = `${Math.random() * 5 + 2}px`;
    chispa.style.height = chispa.style.width;
    chispa.style.left = `${Math.random() * 100}%`;
    chispa.style.top = `${Math.random() * 100}%`;
    chispa.style.backgroundColor = Math.random() > 0.5 ? '#ff007f' : '#ffffff';
    chispa.style.borderRadius = '50%';
    chispa.style.position = 'absolute';
    chispa.style.pointerEvents = 'none';
    chispa.style.boxShadow = '0 0 10px rgba(255, 0, 127, 0.8)';
    chispa.style.opacity = '0';
    chispa.style.animation = 'brilloChispa 1.5s ease-in-out forwards';

    hero.appendChild(chispa);

    setTimeout(() => {
        chispa.remove();
    }, 1500);
}

const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes brilloChispa {
    0% { transform: scale(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}
`;
document.head.appendChild(styleSheet);

setInterval(crearChispa, 200);