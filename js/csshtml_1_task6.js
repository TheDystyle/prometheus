var paintcanvas = document.getElementById("canvas1");
paintcanvas.setAttribute('width', 500);
paintcanvas.setAttribute('height', 350);
var context = paintcanvas.getContext("2d");
var color = "#2fbc60";
var radius = 25;
// малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
var isPainting = false;
// console.log(context);
// console.log(paintcanvas);

function setWidth(value) { // Отслеживаем ввод данных в поле "Set width"(можно заменить на нажатие кнопки)
    var ifNum = isNumeric(value);
    if(ifNum == true){
        var w = document.getElementById('widht1').value; // Получаем введённое значение
        paintcanvas.setAttribute('width', w); // Меняем ширину canvas элемента
    }
}
function setHeight(value) { // Отслеживаем ввод данных в поле "set height" (можно заменить на нажатие кнопки)
    var ifNum = isNumeric(value);
    if(ifNum == true){
        var h = document.getElementById('height1').value; // Получаем введённое значение
        paintcanvas.setAttribute('height', h); // Меняем ширину canvas элемента
    }
}
function doPaint(x,y){
    if(isPainting == true){
        paintCircle(x, y);
    }
}
function startPaint(){
    isPainting = true;
    paintCircle();
}
function endPaint(){
    isPainting = false;
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
function setColor(newColor) {
    color = newColor;
    // console.log(color);
}
function resizeBrush(newSize){
    // console.log(newSize);
    radius = newSize;
    var newSizeOption = document.getElementById("sizeOutput");
    newSizeOption.innerText = newSize;
}