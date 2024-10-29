


function tipCalc(){
    let tipAmount = document.getElementById("cost").value;
    let tipPerc = document.getElementById("percentage").value;
    let tip = (tipAmount*tipPerc)/100;
    let total = Number(tipAmount)+tip;
    document.getElementById("amount").innerHTML = tip;
    document.getElementById("bill").innerHTML = total;
    }