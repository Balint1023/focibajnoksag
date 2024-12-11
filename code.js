let count1 = 0;
let count2 = 0; // golok


        // plusz
        function increase1(){
            count1++;
            document.getElementById('eredmenyelso').innerText = count1;
        }
        function increase2()
        {
            count2++;
            document.getElementById('eredmenymasodik').innerText = count2;
        }

        //minusz
        function decrease1() {
            
            if(count1>0){
                count1--;
            }
            document.getElementById('eredmenyelso').innerText = count1;
        }
        function decrease2(){
            if(count2>0){
                count2--;
            }
            document.getElementById('eredmenymasodik').innerText = count2;
        }

        function Lap(){
            document.getElementById("lapkeres").style.display = "block";
            document.getElementById("laphozzaadas").style.opacity = "0%";
        }
        function Megse(){
            document.getElementById("lapkeres").style.display = "none"
            document.getElementById("lap").reset()
            document.getElementById("laphozzaadas").style.opacity = "100%";
        }
        
        function Start(){
            document.getElementById("main2").style.display = "block"
            document.getElementById("main1").style.display = "none"            
            let csap1nev = document.getElementById("csapat1").value;
            let csap2nev = document.getElementById("csapat2").value;
            document.getElementById("csapat1nev").innerHTML = `${csap1nev}`;
            document.getElementById("csapat2nev").innerHTML = `${csap2nev}`;
        }
        function LapHozzaad()
        {
            let jatekosnev = document.lap.nev.value;
            console.log(jatekosnev);
            let cardtype = document.lap.szin.value;
            let whichteam = document.lap.csapat.value;
            if (cardtype == "sarga" && whichteam == 1)
                document.getElementById("sarga1").innerHTML += `<li>${jatekosnev}</li>`
            if (cardtype == "sarga" && whichteam == 2)
                document.getElementById("sarga2").innerHTML += `<li>${jatekosnev}</li>`
            if (cardtype == "piros" && whichteam == 1)
                document.getElementById("piros1").innerHTML += `<li>${jatekosnev}</li>`
            if (cardtype == "piros" && whichteam == 2)
                document.getElementById("piros2").innerHTML += `<li>${jatekosnev}</li>`
        }