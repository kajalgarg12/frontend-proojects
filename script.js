
calci.addEventListener('click', function(){
    let billAmount = document.getElementById('bill').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let numOfPeople = document.getElementById("people").value;
  

    
    let tipAmount = document.getElementById('tip').value = (billAmount * tipPercentage) / numOfPeople ;
    document.getElementById('total-bill').value = parseFloat(billAmount) + (parseFloat(tipAmount)*numOfPeople);
});