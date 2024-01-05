var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// малюватиме, лише якщо натискати на мишку (спрацьовує лише з натиснутою кнопкою)
var isPainting = false;
// console.log(context);
console.log(paintcanvas);

function setWidth(value) { // Отслеживаем ввод данных в поле (можно заменить на нажатие кнопки)
    var ifNum = isNumeric(value);
    // console.log(width);
    if(ifNum == true){
        // var canvas = document.getElementById("canvas1"); 
        var w = document.getElementById('widht1').value; // Получаем введённое значение
        paintcanvas.setAttribute('width',w); // Меняем ширину canvas элемента
    }
}
function setHeight(value) { // Отслеживаем ввод данных в поле (можно заменить на нажатие кнопки)
    var ifNum = isNumeric(value);
    // console.log(width);
    if(ifNum == true){
        // var canvas = document.getElementById("canvas1"); 
        var h = document.getElementById('height1').value; // Получаем введённое значение
        paintcanvas.setAttribute('height', h); // Меняем ширину canvas элемента
    }
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