let janken = ["グー", "チョキ", "パー"];
let message;
let win = 0;

let count = 0;
let timerId;

function init(){
    stopTimer();
    win = 0;
    message = "";
    startTimer();
    count = 0;
    document.getElementById("result").innerHTML = message;
    document.getElementById("counter").textContent = count;

    let elements = document.getElementsByName('jk');

    for(let i = 0; i < elements.length; i++){
        elements[0].disabled = false;
        elements[1].disabled = false;
        elements[2].disabled = false;
    }
}

function startTimer (){
    timerId = setInterval(tick, 1000);
}

function stopTimer(){
    clearInterval(timerId);
}

function tick(){
    count++;
    document.getElementById("counter").textContent = count;

    if (count >= 5){
        stopTimer();
        message = "時間切れ！"
        document.getElementById("result").innerHTML = message;
    }
}


function judge(){
    if (count >= 5){
    window.alert("時間切れです！やり直してください！");
    return;
    }

    stopTimer();
    let comp = Math.floor(Math.random() * 3);
    let elements = document.getElementsByName('jk');


    for (let i = 0; i < elements.length; i++) //i++ と　i+=1　は同じ
        if (elements.item(i).checked) user = i;
    message = "あなたの手：" + janken[user] + "<br>";
    message += "コンピュータの手："+janken[comp] + "<br>";
    //ここに処理を足す
    if (user == comp){
        message += "あいこです！";
        message += "<br><div style='text-align:center;'><img src='引き分け.png' id='hikiwake'></div>";
    }

   else{

    if(user - comp == 1 || user - comp == -2){

        message += "あなたの負けです！";
        message += "<br><div style='text-align:center;'><img src='負け.png' id='make'></div>";
    }else{

        message += "あなたの勝ちです！";
        message += "<br><div style='text-align:center;'><img src='勝ち.png' id='kachi'></div>";
        confetti();
    }
}
    
document.getElementById("result").innerHTML = message;

elements = document.getElementsByName('jk');

for(let i = 0; i < elements.length; i++){
    elements[0].disabled = true;
    elements[1].disabled = true;
    elements[2].disabled = true;
}
    
}