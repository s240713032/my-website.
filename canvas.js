let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let timer;
let sec = 0;
let timerId;
 
let img = new Array();
for (i=0; i < 3; i++){
    img[i] = new Image();
    img[i].src = "hanabi" +i+".png";
}
 
function drawImgA(x,y,w,h,i){
    ctx.drawImage(img[i],x,y,w,h);
}
 
function init(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(sec <= 3){
    drawCc1(canvas.width/2, 500 - sec * 80, 15, "blue");


    }else if(sec <= 4){
    for (rotDig = 0; rotDig < 360; rotDig += 45){
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(rotDig / 180 * Math.PI);
        drawRct(0*16, 0*16, 16*2, 16*2, "lightyellow");
        drawCc1(1*32, 2*32, 16, "lightblue");
        ctx.restore();
    }

    }else{
    for (rotDig = 0; rotDig < 360; rotDig += 20){
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(rotDig / 180 * Math.PI);
        drawRct(0*16, 0*16, 16*2, 16*2, "lightyellow");
        drawCc1(1*32, 2*32, 16, "lightblue");
        //drawTri(2*32, 2*32, 32*2, 32*2, "blue");
        drawImgA(0*32, 3*32, 14, 160,0);
        //drawImgA(0*32, 4*32, 20, 120,0);
        drawCc1(1*32, 7*32, 8*1, "mediumpurple");
        
        //drawCc1(1*32, 1*32, 16, "lightblue");
        ctx.restore();
    }

    for (rotDig = 0; rotDig < 360; rotDig += 10){
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(rotDig / 180 * Math.PI);

        drawCc1(1*32, 8*32, 10*1, "lightseagreen");

        ctx.restore();
    }

    for (rotDig = 0; rotDig < 360; rotDig += 5){
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(rotDig / 180 * Math.PI);

        drawTri(1*32, 1*32, 16, 20*1, "blue");

        ctx.restore();
    }
    }
}

 
function drawRct(x, y, w, h, color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}
 
function drawTri(x,y,w,h,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x+w/2, y);
    ctx.lineTo(x, y+h);
    ctx.lineTo(x+w, y+h);
    ctx.closePath();
    ctx.fill();
}
 
function drawCc1(x,y,r,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x+r, y+r, r, 0, Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function startTimer(){
    sec = 0;
    init();
    timerId = setInterval(tick, 1000);

}

function stopTimer(){
    clearInterval(timerId)
}

function tick(){
    sec++;
    init();
}