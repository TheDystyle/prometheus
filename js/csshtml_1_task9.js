var fgImage = null;
var bgImage = null;
//var context;
function loadForegroundImage(){
    var imgFile = document.getElementById("fgfile");
    fgImage = new SimpleImage(imgFile);
    var canvas = document.getElementById("fgcan");
    fgImage.drawTo(canvas);
    //context = fgImage.getContext("2d");
}
function loadBackgroundImage(){
    var imgFile = document.getElementById("bgfile");
    bgImage = new SimpleImage(imgFile);
    var canvas = document.getElementById("bgcan");
    bgImage.drawTo(canvas);
}

function greenScreen(){
    if(fgImage == null ||  !fgImage.complete()){
        alert("foreground not loaded");
        return;
    }
    if(bgImage == null || !fgImage.complete()){
        alert("fbackground not loaded");
        return;
    }
    clearCanvas();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// =-=-=-=-=-=
// var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
// for(var pixel of fgImage.values()){
//     var x = pixel.getX();
//     var y = pixel.getY();
//     if(pixel.getGreen() > greenThreshold){
//         var bgPixel = bgImage.getPixel(x,y);
//         output.setPixel(x,y,bgPixel);
//     }
//     else{
//         output.setPixel(x,ypixel);
//     }
// }




