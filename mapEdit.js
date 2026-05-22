let size = 8;
let selectChip = "chipA.png";

let sunaCount = 0;
let kabe1Count = 0;
let kabe2Count = 0;

function selectTile(name){
    selectChip = name;
}

function setSize(s){
    size = s;

    let b = document.getElementById("board");
    b.innerHTML = ""; 

    init();
}

function init(){
    let b = document.getElementById("board");
    for (let i = 0; i < size; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            let img = document.createElement("img");

            img.src = "chipA.png";
            img.className = "cell";
            img.id = "img" + i + j;
            img.onclick = clicked;

            td.appendChild(img);
    
            tr.appendChild(td);
        }
        b.appendChild(tr);
    }
}

function clicked(e){
    document.getElementById(e.target.id).src = selectChip

    if(selectChip == "chipD.png"){
    sunaCount++;
}

if(selectChip == "kabe1.png"){
    kabe1Count++;
}

if(selectChip == "kabe2.png"){
    kabe2Count++;
}

    document.getElementById("count").innerHTML =" 砂 × " + sunaCount + "<br>" + " 壁1 × " + kabe1Count + "<br>" + " 壁2 × " + kabe2Count;
    
    
}



