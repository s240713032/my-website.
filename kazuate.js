let answer = 0;

function restart(){
    answer = Math.floor(Math.random()*100);
    document.getElementById("result").innerHTML = "";
    document.getElementById("num").value = "";
}

function judge(){
    let a = Number(document.getElementById("num").value);
    document.getElementById("result").innerHTML 

    if (a < 0 || a > 100){
        document.getElementById("result").innerHTML = "0〜100の数字を入力してください！";
        return;
    }

    if (a == answer){
        document.getElementById("result").innerHTML = 
        "正解！<br><div style='text-align:center;'><img src='正解.png' id='seikai'></div>";


    } else if ((a - answer <= 10) && (a - answer >= -10)){
          if (a < answer){
        document.getElementById("result").innerHTML = 
        "10以内！もっと大きい！<br><div style='text-align:left;'><img src='sankaku.png' id='sankaku'></div>";
    } else {
        document.getElementById("result").innerHTML = 
        "10以内！もっと小さい！<br><div style='text-align:left;'><img src='sankaku.png' id='sankaku'></div>";
    
        }
    } else {
        if (a < answer){
        document.getElementById("result").innerHTML = 
        "10以上大きい！<br><div style='text-align:left;'><img src='batu.png' id='batu'></div>";    
    } else {
        document.getElementById("result").innerHTML = 
        "10以上小さい！<br><div style='text-align:left;'><img src='batu.png' id='batu'></div>";
    }
    }
}

restart();

