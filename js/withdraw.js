function handleClick(){
    const withrawValue = getNewDepositInputValue('withdraw-input');
    const withdrawPreviousTotal = getPreviousDepositInnerText ('total-withdraw');
    const newTotalWithdraw = withdrawPreviousTotal + withrawValue;
    setValue('total-withdraw', newTotalWithdraw);
    const previousTotalBalance = getPreviousDepositInnerText ('total-balance');
    const newTotalBalance = previousTotalBalance - withrawValue;
    setValue('total-balance', newTotalBalance);
    

}