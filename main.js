var butt=document.getElementById("bill-btn");
//console.log(butt);

butt.addEventListener('click',function(e){
    e.preventDefault();

    var amount=document.getElementById('bill-amount').value;
    console.log(amount);

    var tip=document.getElementById("bill-tip").value;
    console.log(tip);

    var tipvalue=document.getElementById("bill-tip-dis");
    console.log(tipvalue);

    var total=document.getElementById("bill-tot");
    console.log(total);

    var percentage=Number(amount)*Number(tip)/100;
    tipvalue.value=percentage;

    var final=Number(amount)+percentage;
    total.value=final;

})