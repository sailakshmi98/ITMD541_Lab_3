const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');

document.getElementById('tipForm').addEventListener('input', function() {
    let bill = parseFloat(billTotal.value);
    let tip = parseFloat(tipSlider.value);

    if (!isNumeric(billTotal.value)) {
        alert('Please enter a valid numerical value for bill total.');
        billTotal.value = ""; 
        return; // Exit the function
    }
    
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

function isNumeric(value) {
    return /^[0-9]*(\.[0-9]+)?$/.test(value);
}
