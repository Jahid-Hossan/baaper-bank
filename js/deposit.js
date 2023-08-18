document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositInputValue = getNewDepositInputValue('deposit-input');
    const previousDepositValue = getPreviousDepositInnerText('total-deposit')
    const newTotalDeposit = previousDepositValue + newDepositInputValue;
    setValue('total-deposit', newTotalDeposit);
    const previousTotalBalance = getPreviousDepositInnerText('total-balance');
    const newTotalBalance = previousTotalBalance + newDepositInputValue;
    setValue('total-balance', newTotalBalance);
})