function getNewDepositInputValue(depositInput) {
   const depositInputElement = document.getElementById(depositInput);
   const depositInputString = depositInputElement.value;
   const value = parseFloat(depositInputString);
   depositInputElement.value = '';
   return value;
}

function getPreviousDepositInnerText (previousDeposit){
    const previousDepositElement = document.getElementById(previousDeposit);
    const previousDepositString = previousDepositElement.innerText;
    const value = parseFloat(previousDepositString);
    return value;
}

function setValue(getPreviousValue, newValue){
    const previousValue = document.getElementById(getPreviousValue);
    previousValue.innerText = newValue;
}
