let count1 = 0;
let count2 = 0; // golok
let ido, ido2, ido3, ido4;
let mp = 0;
let minutes = 0;
let mp2 = 0;
let minutes2 = 0;
let mp3 = 0;
let minutes3 = 10;
let mp4 = 0;
let minutes4 = 0;
let raadas = document.getElementById("hosszabitas");
let csap1nev, csap2nev;
let raadasido = document.getElementById("raadasido");
let folytatas = document.getElementById("folytat");
document.getElementById("szunet").disabled = true;
perc = document.getElementById("timer");
folytatas.disabled = true;


// plusz
function increase1() {
    count1++;
    document.getElementById('eredmenyelso').innerText = count1;
}
function increase2() {
    count2++;
    document.getElementById('eredmenymasodik').innerText = count2;
}
//minusz
function decrease1() {

    if (count1 > 0) {
        count1--;
    }
    document.getElementById('eredmenyelso').innerText = count1;
}
function decrease2() {
    if (count2 > 0) {
        count2--;
    }
    document.getElementById('eredmenymasodik').innerText = count2;
}
function Lap() {
    document.getElementById("lapkeres").style.display = "block";
    document.getElementById("laphozzaadas").style.opacity = "0%";
}
function Megse() {
    document.getElementById("lapkeres").style.display = "none"
    document.getElementById("lap").reset()
    document.getElementById("laphozzaadas").style.opacity = "100%";
}
function Start() {
    document.getElementById("main2").style.display = "block"
    document.getElementById("main1").style.display = "none"
    csap1nev = document.getElementById("csapat1").value;
    csap2nev = document.getElementById("csapat2").value;
    document.getElementById("csapat1nev").innerHTML = `${csap1nev}`;
    document.getElementById("csapat2nev").innerHTML = `${csap2nev}`;
}
function Idoinditas() {
    document.getElementById("indit").disabled = true;
    document.getElementById("szunet").disabled = false;
    folytatas.disabled = true;
    Idoszal();
}

function Idoszal() {
    ido = setInterval(Idoszal, 1000);
    mp++;
    if (mp < 60) {
        perc.innerHTML = `0${minutes}:${mp < 10 ? '0' : ''}${mp}`;
    }
    else {
        mp = 0;
        minutes++;
        perc.innerHTML = `0${minutes}:00`;
    }
    if (minutes == 10) {
        perc.innerHTML = `${minutes}:00`;
        clearInterval(ido);
        folytatas.disabled = false;
    }
    if (minutes == 10 && raadas.value > 0) {
        ido2 = setInterval(Idoszal2, 1000)
        ido2();
    }

}
function Hosszabitas() {
    if (raadas.value > 5 || raadas.value < 0) {
        alert("A hosszabbítás maximum 5 perc lehet és nem lehet negatív!");
    }
    raadas.disabled = true;
}

function Idoszal2() {
    mp2++;
    if (mp2 < 60) {
        raadasido.innerHTML = `0${minutes2}:${mp2 < 10 ? '0' : ''}${mp2}`;
    }
    else {
        mp2 = 0;
        minutes2++;
        raadasido.innerHTML = `0${minutes2}:00`;
    }
    if (minutes2 == raadas.value) {
        raadasido.innerHTML = `0${minutes2}:00`;
        clearInterval(ido2);
        document.getElementById("indit").disabled = true;
        raadas.value = 0;
        raadas.innerHTML = "";
        folytatas.disabled = false;
    }
}
function Folytatas() {
    document.getElementById("indit").disabled = true;
    document.getElementById("szunet").disabled = false;
    ido3 = setInterval(Idoszal3, 1000);
    Idoszal3();
}
function Idoszal3() {
    folytatas.disabled = true;
    mp3++;
    if (mp3 < 60) {
        perc.innerHTML = `${minutes3}:${mp3 < 10 ? '0' : ''}${mp3}`;
    }
    else {
        mp3 = 0;
        minutes3++;
        perc.innerHTML = `${minutes3}:00`;
    }
    if (minutes3 == 20) {
        perc.innerHTML = `${minutes3}:00`;
        clearInterval(ido3);
        document.getElementById("indit").disabled = true;
        Vegeredmeny();
        folytatas.disabled = false;
    }
    if (minutes3 == 20 && raadas.value > 0) {
        ido4 = setInterval(Idoszal4, 1000)
        ido4();
    }
}
function Idoszal4() {
    mp4++;
    if (mp4 < 60) {
        raadasido.innerHTML = `${minutes4}:${mp4 < 10 ? '0' : ''}${mp4}`;
    }
    else {
        mp4 = 0;
        minutes4++;
        raadasido.innerHTML = `${minutes4}:00`;
    }
    if (minutes4 == raadas.value) {
        raadasido.innerHTML = `${minutes4}:00`;
        clearInterval(ido4);
        document.getElementById("indit").disabled = true;
        raadas.value = 0;
        raadas.innerHTML = "";
        folytatas.disabled = true;
        Vegeredmeny();
    }

}
function Idoszunet() {
    clearInterval(ido);
    clearInterval(ido2);
    clearInterval(ido3);
    clearInterval(ido4);
    document.getElementById("indit").disabled = false;
}
function Vegeredmeny(){
    if (count1 > count2) {
        alert(`A meccset a(z) ${csap1nev} nyerte!`)
    }
    else if (count1 < count2)
        alert(`A meccset a(z) ${csap2nev} nyerte!`)
    else alert(`A meccs döntetlen lett!`)
}

function LapHozzaad() {
    let jatekosnev = document.lap.nev.value;
    console.log(jatekosnev);
    let cardtype = document.lap.szin.value;
    let whichteam = document.lap.csapat.value;
    if (cardtype == "sarga" && whichteam == 1)
        document.getElementById("sarga1").innerHTML += `<li>${jatekosnev}</li>`
    if (cardtype == "sarga" && whichteam == 2)
        document.getElementById("sarga2").innerHTML += `<li>${jatekosnev}</li>`
    if (cardtype == "kiallit" && whichteam == 1)
        document.getElementById("kiallit1").innerHTML += `<li>${jatekosnev}</li>`
    if (cardtype == "kiallit" && whichteam == 2)
        document.getElementById("kiallit2").innerHTML += `<li>${jatekosnev}</li>`
}
