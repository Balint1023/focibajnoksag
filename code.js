let count1 = 0; // golok


        // plusz
        function increase1() {
            count1++;
            document.getElementById('eredmenyelso').innerText = count1;
        }

        //minusz
        function decrease1() {
            
            if(count1>0){
                count1--;
            }
            document.getElementById('eredmenyelso').innerText = count1;
        }

        function Lap(){
            document.getElementById("lapkeres").style.display = "block";
        }
        function Megse(){
            document.getElementById("lapkeres").style.display = "none"
            document.getElementById("lap").reset()
        }
        
        function Start(){
            document.getElementById("main2").style.display = "block"
            document.getElementById("main1").style.display = "none"            
            
        }