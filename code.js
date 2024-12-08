let count1 = 0; // golok

        // plusz
        function increase1() {
            count1++;
            document.getElementById('eredmenyelso').innerText = count1;
        }

        //minus
        function decrease1() {
            
            if(count1>0){
                count1--;
            }
            document.getElementById('eredmenyelso').innerText = count1;
        }