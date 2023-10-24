const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');

document.getElementById('tipForm').addEventListener('input', function() {
    let bill = parseFloat(billTotal.value);
    let tip = parseFloat(tipSlider.value);
    
    if (!isNaN(bill)) {
        let tipValue = bill * (tip / 100);
        let total = bill + tipValue;

        tipPercentage.value = tip + '%';
        tipAmount.value = tipValue.toFixed(2);
        totalBill.value = total.toFixed(1);
    } else {
        alert('Please enter a valid bill total.');
    }
});
