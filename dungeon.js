"use strict";

const W = 35; //迷路の幅
const H = 35; //迷路の高さ

const maze = []; //迷路
const wall = new Image();
wall.src = "kabe1.png"

const floor = new Image();
floor.src = "chipA.png";

let ctx;

function random(v){
    return Math.floor(Math.random() * v); // 0からvまでの乱数を整数で帰宇r
}

function init(){
    let maze = document.getElementById("maze");
    ctx = maze.getContext("2d");

    createMaze(W, H);//、迷路作成
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
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 900, 600);

    //迷路描画
    //ctx.fillStyle = "brown";
    //ctx.translate(0, 0);
    for (let x = 0; x < W; x++){
        for (let y = 0; y < H; y++){
            if (maze[y][x] == 1){
                ctx.drawImage(wall,x * 16, y * 16, 16, 16); //壁の画像描画
            }else{
                ctx.drawImage(floor,x * 16, y * 16, 16, 16); //床の画像描画
            }
        }
    }
    ctx.restore();
}

