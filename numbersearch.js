let timer = 0;
let timerId;

function q(){
    let dgt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let a = Array(8);
    x = Math.floor(Math.random() * 8);
    for(let i = 0, j = 0; i < 9; i++){
        if(i != x){
            a[j] = dgt[i];
            j++;
        }
    }
    shuffle(a);
}

function start(){
    qno = 1;

    timer = 0;
    document.getElementById("timer").innerText = timer;
    for(let i = 1; i <= 10; i++){

        document.getElementById("question" + i).innerText = "";

        document.getElementById("ans" + i).innerText = "";
        
    }
    document.getElementById("result").src = "";
    startTimer();

    q();
}

let qno = 1;
let x = 0; //q()の中に作った変数xの方は"let"を削除しグローバル変数に

document.addEventListener('keydown', myhandler, false);

function myhandler(event){
    for(let i = 1; i <= 9; i++){
        if(event.key == i){
            document.getElementById("ans" + qno).innerText
                = '[' + i + ']';
            if(i == x + 1){
                qno++;
                if(qno > 10){
                    clearInterval(timerId);

                    if(timer <= 30){
                        document.getElementById("result").src = "under30.png";
                    }else if(timer <= 60){
                        document.getElementById("result").src = "under60.png";
                    }else if(timer <= 90){
                        document.getElementById("result").src = "under90.png";
                    }else{
                        document.getElementById("result").src = "else.png";
                    }
                }else{
                    q();
                }
            }
        }
    }
}
    


Array.prototype.shuffle = function(){
    let i = this.length;
    while(i){
        let j = Math.floor(Math.random() * i);
        let t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}

function shuffle(cards){
    //let cards = [1,1,2,2,3,3,4,4,5,5,6,6];
    cards.shuffle();
    document.getElementById("question" + qno).innerText = cards.join(" ");
}

function startTimer(){
    clearInterval(timerId);
    timerId = setInterval(tick,1000);
}

function tick(){
    timer++;
    document.getElementById("timer").innerText = timer;
}