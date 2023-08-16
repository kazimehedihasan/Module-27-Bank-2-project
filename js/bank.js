/*
1: add event listener to thedeposit button

2: get desposit amount from the deposite input field
2-5. convert string deposit amount to a number type

3. clear the deposit input field after getting the value 
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total 

6. get current balance
7. calculate the new balance and set it to the balance total element 
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
// step. 6
const balanceTotalElement = document.getElementById('Balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

// step- 7
const newBalanceTotal = previousBalanceTotalAmount + newDeposittAmount;
balanceTotalElement.innerText = newBalanceTotal;
})
