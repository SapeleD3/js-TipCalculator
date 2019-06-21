function calcTip () {
    
    var billAmnt = document.getElementById('billAmnt').value;
    var peopleAmnt = document.getElementById('peopleAmnt').value;
    var serviceQual = document.getElementById('serviceQual').value;
    

    if (billAmnt == "" || serviceQual == 0){
    return; 
    }


    var solve = (billAmt * serviceQual)/peopleAmnt;

    solve = Math.round(solve*100)/100;

}

document.getElementById('calculator').onclick = function () {
    calcTip();
};