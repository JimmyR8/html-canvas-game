# GAME RACE CAR'S, VELOCITY RANDOM - ¡Experimenta la emoción de la carrera! 🏎️🏁

## JUEGO DE AUTOS
¡Bienvenido a GAME RACE CAR'S, VELOCITY RANDOM! Este sencillo juego de carreras basado en la web presenta dos autos que corren a lo largo de una pista con velocidades aleatorias. Siente la emoción al iniciar la carrera y observa cómo los autos avanzan a toda velocidad por la pantalla.

![image](https://github.com/JimmyR8/html-canvas-game/assets/150199216/6b64d271-8e16-40aa-a552-d7bafea96d04)

> [!IMPORTANT]
> ## Codigo JavaScript
```// JavaScript para la animación y lógica del juego

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
var Car1 = 0;
var Car2 = 0;
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

// Función principal de dibujo, se ejecuta en un bucle
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar1();
    drawCar2();
}
```

## Funcion de inciar la carrera
``` // Nueva función para iniciar la carrera
function startRace() {
    alert("Starting Race.");
}
```
## Funcion de detener la carrera
``` // Nueva función para detener la carrera
function stopRace() {
    alert("Stopping Race.");
    clearInterval(intervalId);
} 
```
## Funcion para reinicar la carrera
``` // Nueva función para reiniciar la carrera
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
```
> [!IMPORTANT]
> ## Tecnologías Utilizadas 💻
> - HTML
> - CSS
> - JavaScript

## Tabla de Contenidos
### Introducción
- [Inicio Rápido](#inicio-rapido)
- [Características](#caracteristicas)
- [Cómo Jugar](#como-jugar)
- [Personalización](#personalizacion)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

> [!TIP]
> ## <a name="inicio-rapido"></a> Inicio Rápido
> Clona el repositorio:
> - git clone https://github.com/tu-nombre/juego-autos.git
> - Abre el archivo index.html en tu navegador web preferido.
> - Presiona el botón "Start Race" para iniciar la emocionante carrera.


 ##  <a name="caracteristicas"></a> Características
 Dos autos con velocidades aleatorias.
 Realista fondo de pista de carrera.
 Música de fondo para una experiencia inmersiva.
 Interfaz de usuario simple e intuitiva.

> [!TIP]
> ## <a name="como-jugar"></a> Cómo Jugar
> - Haz clic en el botón "Start Race" para iniciar la carrera.
> - Observa cómo los dos autos avanzan a toda velocidad por la pista de carrera.
> - Disfruta de la música de fondo que realza la atmósfera del juego.

> [!TIP]
> ## <a name="personalizacion"></a> Personalización
> Siéntete libre de personalizar el juego según tus preferencias:
> - Imagen de Fondo: Reemplaza race-track.png con la imagen de pista que desees.
> - Imágenes de Autos: Sustituye car1.png y car2.png con tus propias imágenes de autos.
> - Música de Fondo: Cambia el archivo de audio (Tokyo Drift (Fast & Furious)-music.mp3) por tu pista preferida.

> [!NOTE]
> ## <a name="contribuciones"></a> Contribuciones
> Si tienes ideas para mejorar el juego o corregir problemas, no dudes en contribuir. Sigue estos pasos:
> - Haz un fork del repositorio.
> - Crea una nueva rama: git checkout -b feature/tu-característica.
> - Realiza tus cambios y haz commit: git commit -m 'Añadir tu característica'.
> - Haz push a la rama: git push origin feature/tu-característica.
> - Envía una solicitud de extracción.

> [!IMPORTANT]
> ## <a name="licencia"></a> Licencia
> Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE.md para más detalles.
