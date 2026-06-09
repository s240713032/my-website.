let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let old_x = 0;
let old_y = 0;
let size;
let pencolor = "green";

function init()
{
    canvas.addEventListener("touchstart", touchStart, false);
    canvas.addEventListener("touchmove",touchMove, false);
    window.addEventListener("orientationchange", onchange, true);
    document.getElementById("slider").addEventListener("input", function() {
    size = slider.value;
    });
}

function oChange()
{
    var flag = confirm("絵を消去しますか？");
    if (flag == false) return;
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function touchStart(event)
{
    if (event.touches.length > 1)
        size = event.touches.length * 2;
    old_x = event.touches[0].pageX;
    old_y = event.touches[0].pageY;
}

//function drawCcl(x,y,r,color)
//{
//    ctx.fillStyle = color;
//    ctx.beginPath();
//    ctx.arc(x+r, y+r, r, 0, Math.PI*2,true);
//    ctx.closePath();
//    ctx.fill();
//}



function touchMove(event)
{
    let c_x;
    let c_y;
    event.preventDefault();
    c_x = event.touches[0].pageX;
    c_y = event.touches[0].pageY;
    drawLine(old_x, old_y, c_x, c_y, size, pencolor);
    old_x = c_x;
    old_y = c_y;
}

function changeColor(color)
{
    pencolor = color;
}

function drawLine(x1, y1, x2, y2, psize, color)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.lineWidth = psize;
    ctx.strokeStyle = color;
    ctx.stroke();
}
