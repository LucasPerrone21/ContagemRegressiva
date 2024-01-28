import Countdown from "./countdown.js";

const dias = document.querySelector("#dias");
const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const inputData = document.querySelector(".data");
const btn = document.querySelector(".iniciar");
let temContagem = false;

btn.addEventListener("click", handleTime);
inputData.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleTime();
    }
});

let intervalo; // Declare a variable to store the interval ID

function handleTime() {
    clearInterval(intervalo); // Clear the previous interval, if any

    const tempoInput = new Date(inputData.value);
    const tempoAtual = new Date();

    if (tempoAtual < tempoInput) {
        let tempo = new Countdown(inputData.value + " GMT-0300");

        intervalo = setInterval(() => {
            const valores = tempo.timeUntil;
            dias.innerText = valores.days;
            horas.innerText = valores.hours;
            minutos.innerText = valores.minutes;
            segundos.innerText = valores.seconds;
        }, 1000);
    } else {
        alert("Insira um dia válido");
    }
}
