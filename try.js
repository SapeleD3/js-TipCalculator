function calcTip () {
        var billAmnt = document.getElementById('billAmnt').value;
        var peopleAmnt = document.getElementById('peopleAmnt').value;
        var serviceQual = document.getElementById('serviceQual').value;


        //Check if Number of People is Empty
        if (peopleAmnt === "" || peopleAmnt <= 1) {
            peopleAmnt = 1;
            document.getElementById('each').style.display = "none";
        }else {
            document.getElementById('each').style.display = "block";
        }
        
        //Calculate the tip
        var solve = (billAmnt*serviceQual)/peopleAmnt;

        solve = Math.round(solve*100)/100;

        //Correct to two decimal places
        solve = solve.toFixed(2);

        //Display the tip
        document.getElementById("tip").innerHTML= solve;
     
    }

    document.getElementById('calculator').onclick = function () {
        calcTip()};