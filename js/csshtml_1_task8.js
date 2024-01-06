var image;
var imageGray;
function upload(){
    var imgcanvas = document.getElementById("can");
    var imgcanvas2 = document.getElementById("gray");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    imageGray = image;
    image.drawTo(imgcanvas);
    imageGray.drawTo(imgcanvas2);
}

function makeGray(){
    for(var pixel of image.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("gray");
    imageGray.drawTo(imgcanvas);
}