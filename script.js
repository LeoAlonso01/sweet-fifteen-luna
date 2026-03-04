const boton = document.querySelector(".btn");
const musica = document.getElementById("musica");
const control = document.getElementById("playPause");

boton.addEventListener("click", () => {

musica.play();

});

control.addEventListener("click", () => {

if(musica.paused){

musica.play();
control.textContent = "⏸ Pausar música";

}else{

musica.pause();
control.textContent = "▶ Reproducir música";

}

});

const fechaEvento = new Date("Jul 27, 2026 00:00:00").getTime();

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