// JavaScript para la animación y lógica del juego

var intervalId; // Variable para almacenar el ID del intervalo

// Nueva función para iniciar la carrera
function startRace() {
    alert("Starting Race.");

    // Iniciar el bucle de dibujo después de mostrar el mensaje
    intervalId = setInterval(dibujar, 100);
}

// Nueva función para detener la carrera
function stopRace() {
    alert("Stopping Race.");
    clearInterval(intervalId);
}

// Nueva función para reiniciar la carrera
function restartRace() {
    alert("Restarting Race.");

    // Reiniciar posiciones de los carros
    posicionXcar1 = 0;
    posicionYcar1 = 20;
    posicionXcar2 = 0;
    posicionYcar2 = 120;

    // Reiniciar valores aleatorios de las posiciones iniciales
    numeroRandomPosicionXCar1 = Math.floor(Math.random() * 11) + 3;
    numeroRandomPosicionXCar2 = Math.floor(Math.random() * 11) + 3;
}

var canvas = document.getElementById("areaDibujo");
var ctx = canvas.getContext("2d");

var posicionXcar1 = 0;
var posicionYcar1 = 20;
var posicionXcar2 = 0;
var posicionYcar2 = 120;
var winCar1X = 430;
var winCar1Y = 250;
var winCar2X = 430;
var winCar2Y = 340;
var imagenWidth = 80;
var imagenHeight = 80;

var imageCar1 = new Image();
var imageCar2 = new Image();
var numeroRandomPosicionXCar1 = Math.floor(Math.random() * 11) + 3;
var numeroRandomPosicionXCar2 = Math.floor(Math.random() * 11) + 3;

// Asignar las rutas de las imágenes
imageCar1.src = "images/car1.png";
imageCar2.src = "images/car2.png";

// Funciones que se ejecutan cuando las imágenes se cargan
imageCar1.onload = function () {
    drawCar1();
}
imageCar2.onload = function () {
    drawCar2();
}

// Función para dibujar los carros en el lienzo
function drawCar1() {
    ctx.drawImage(imageCar1, posicionXcar1, posicionYcar1, 75, 75);
    posicionXcar1 += numeroRandomPosicionXCar1;

    if (posicionXcar1 >= canvas.width) {
        posicionXcar1 = 0;
        posicionYcar1 = 250;
    }
}

function drawCar2() {
    ctx.drawImage(imageCar2, posicionXcar2, posicionYcar2, 80, 80);
    posicionXcar2 += numeroRandomPosicionXCar2;

    if (posicionXcar2 >= canvas.width) {
        posicionXcar2 = 0;
        posicionYcar2 = 340;
    }
}

function carWin1() {
    if (imageCar1 === winCar1X && imageCar1 === winCar1Y) {
        console.log("¡Car 1 is WIN!")
    }
}

function carWin2() {
    if (imageCar2 === winCar2X && imageCar2 === winCar2Y) {
        console.log("¡Car 2 is WIN!")
    }
}


// Función principal de dibujo, se ejecuta en un bucle
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar1();
    drawCar2();
}


