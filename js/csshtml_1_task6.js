var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
var isPainting = false;

function setWidth(value) {
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
    // щоразу починайте нове коло (circle)
    context.beginPath();
    // малюйте коло з радіусом 2*PI навколо заданої точки
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// перевірте, щоб value було числовим значенням
function isNumeric(value) {
    // стандартна функція JavaScript, аби визначити, чи рядок можна перетворити рядок на число 
    return !isNaN(value);
}