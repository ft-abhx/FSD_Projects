if(document.location.hash) {
    var id = document.location.hash.substring(1);
    var url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`
    fetch(url).then((r) => r.blob()).then((blob) => {
        var img = new Image();
        img.src = URL.createObjectURL(blob);
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        img.onload = function () {
            ctx.drawImage(img, 0, 0, 600, 400);
        }
    });
}


function changeBrightness(v){
    document.getElementById("canvas").style.filter = `brightness(${v})`;
}

function changeContrast(v){
    document.getElementById("canvas").style.filter = `contrast(${v})`;
}

function changeSaturation(v){
    document.getElementById("canvas").style.filter = `saturate(${v})`;
}

function changeGrayscale(v){
    document.getElementById("canvas").style.filter = `grayscale(${v})`;
}

function changeSepia(v){
    document.getElementById("canvas").style.filter = `sepia(${v})`;
}

function changeHue(v){
    document.getElementById("canvas").style.filter = `hue-rotate(${v}deg)`;
}

function changeBlur(v){
    document.getElementById("canvas").style.filter = `blur(${v}px)`;
}

function changeInvert(v){
    document.getElementById("canvas").style.filter = `invert(${v})`;
}

function saveAs(blob,filename){
    blob.name = filename;
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function saveFile(){
    document.getElementById("canvas").toBlob(function(blob) {
        saveAs(blob, "image.png");
    });
}

function convert(n){
    var l = Number(n).toString(16);
    return l.length==1 ? '0'+l : l;
}

function checkcolor(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    var r = 0;
    var g = 0;
    var b = 0;
    var count = 0;
    for (var i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i+1];
        b += data[i+2];
        count++;
    }
    r = Math.floor(r/count);
    g = Math.floor(g/count);
    b = Math.floor(b/count);
    var color = `rgb(${r},${g},${b})`;
    document.getElementById("color").style.backgroundColor = color;
    document.getElementById("color-val").innerHTML = '#' + convert(r) + convert(g) + convert('b');
    document.getElementById("color-val").style.color=color;
}