/*
1. add event handler with the withdraw button
2. get the withdraw amount 
3. withdraw filde
4. get previous withdraw total 
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous blance
7. calculate new balance and set it to the balance total element 
*/ 
// 1
document.getElementById('btn-withdra').addEventListener('click', function(){
    // step . 2

const withdrawField = document.getElementById('but-input');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//step-  3 
withdrawField.value = '';

// step - 4
const withdrawTotalElement = document.getElementById('Withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
//  step - 5 
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;
// step - 6
const balanceElement = document.getElementById('Balance-total');
const previousBalanceTotalString = balanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step - 7
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceElement.innerText = newBalanceTotal;
})