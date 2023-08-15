/*
1: add event listener to thedeposit button

2: get desposit amount from the deposite input field
2-5. convert string deposit amount to a number type

3. clear the deposit input field after getting the value 
4. get the previous deposit total
*/ 

// --  1
document.getElementById('btn-deposit').addEventListener('click', function(){
//  2:
const depositField = document.getElementById('deposit-field');
const newDeposittAmountString = depositField.value;
const newDeposittAmount = parseFloat(newDeposittAmountString);

// step- 3:
depositField.value = '';

// step-- 4
const depositTotalElement = document.getElementById('diposite-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// step - 5
const newDepositTotal = previousDepositTotal + newDeposittAmount;
depositTotalElement.innerText = newDepositTotal;
})
