"use strict";

const W = 31; //迷路の幅
const H = 19; //迷路の高さ
const player = new Player(1,1); //主人公

const maze = []; //迷路
const wall = new Image();

const goal = {
    x: W-2, 
    y: H-2
};

wall.src = "kabe1.png"

const floor = new Image();
floor.src = "chipA.png";

let change = 0;
let ctx;
let keyCode = 0; //押下されたキー
let timer = NaN; //タイマー
let img;
let pengin = false

function random(v){
    return Math.floor(Math.random() * v); // 0からvまでの乱数を整数で帰宇r
}

function init(){
    let maze = document.getElementById("maze");
    ctx = maze.getContext("2d");

    createMaze(W, H);//、迷路作成
    repaint();

    go();
}

function go(){
    window.onkeydown = mykeydown;
    window.onkeyup = mykeyup;

    let maze = document.getElementById("maze");

    maze.oncontextmenu = function (e){
        e.preventDefault();
    };

    timer = setInterval(tick, 200);
}

//メインルーチン
function tick(){
    player.update();

    if(player.x == goal.x && player.y == goal.y){
        window.alert("CLEAR!");
        clearInterval(timer);
        return;
    }

    repaint();
}

function createMaze(w, h){
    for (let y = 0; y < H; y++) {
        maze[y] = [];
        for (let x = 0; x < W; x++){
            maze[y][x] = x == 0 || x == w - 1 || y == 0 || y == h - 1 ? 1 : 0;
        }
    }
    for (let y = 2; y < h - 2; y += 2){
        for (let x = 2; x < w - 2; x += 2){
            maze[y][x] = 1; //柱を立てる
            let dir = random(y == 2 ? 4 : 3);
            let px = x; //今のx座標
            let py = y; //今のy座標
            switch(dir){
                case 0:
                    py++; //下に倒す
                    break;
                case 1:
                    px--; //左に倒す
                    break;
                case 2:
                    px++; //右に倒す
                    break;
                case 3:
                    py--; // 上に倒す
                    break;
       
            }
         maze[py][px] = 1; //倒れた場所も柱にする
        }

    }
}

//描画
function repaint(){
    //背景クリア
    //ctx.fillStyle = "black";
    //ctx.fillRect(0, 0, 900, 600);

    //迷路描画
    //ctx.fillStyle = "brown";
    //ctx.translate(0, 0);
    for (let x = 0; x < W; x++){
        for (let y = 0; y < H; y++){
            if (maze[y][x] == 1){
                ctx.drawImage(wall,x * 30, y * 30, 30, 30); //壁の画像描画
            }else{
                ctx.drawImage(floor,x * 30, y * 30, 30, 30); //床の画像描画
            }
        }
    }
    player.paint(ctx, 0, 0, 30, 30)
    ctx.fillStyle = "green";
    ctx.fillRect(goal.x*30, goal.y*30, 30, 11);
    ctx.restore();
    ctx.fillStyle = "orange";
    ctx.fillRect(goal.x*30, goal.y*30+11, 30, 19);
}

//主人公オブジェクトコンストラクタ
function Player(x, y){
    this.x = x; // x座標
    this.y = y; // y座標
    this.dir = 1;

    this.update = function (){
        let nx = 0;
        let ny = 0;
        switch (keyCode){
            case 37:
                nx = -1;
                this.dir = 2;
                break;

            case 38:
                ny = -1;
                this.dir = 0;
                break;

            case 39:
                nx = +1;
                this.dir = 3;
                break;

            case 40:
                ny = +1;
                this.dir = 1;
                break;
        }
        if (maze[this.y + ny][this.x + nx] == 0 && (nx != 0 || ny != 0)){
            //移動先の座標が通路(０)のとき
            this.x = this.x + nx;
            this.y = this.y + ny;
        }

    };

    this.paint = function (gc, x, y, w, h){
        if (pengin){
            img = document.getElementById("pengin" + this.dir);
        }else{
            img = document.getElementById("hero" + this.dir);
        }
        document.getElementById("hero" + this.dir);
        //gc.drawImage(img, x, y, w, h); //教科書
        gc.drawImage(img, this.x*30, this.y*30, 30, 30);
    };
}

//キー＆マウス押下のイベントハンドラ
function mykeydown(e){
    keyCode = e.keyCode;

    if(e.keyCode >= 37 && e.keyCode <= 40){
        e.preventDefault();
    }
}

function mykeyup(e){
    keyCode = 0;
}


function Change(){
    if(change == 0){
        floor.src = "kori.png";
        wall.src = "yuki.png";
        pengin = true;
        change = 1;
    }else{
        floor.src = "chipA.png";
        wall.src = "kabe1.png";
        pengin = false;
        change = 0;
    }

    repaint();
}

function Restart(){
    clearInterval(timer);
    player.x = 1;//左上(0,0)
    player.y = 1;
    timer = setInterval(tick, 200);
    repaint();
}