// function for getting input
function getIncomeInput(){
    let incomeInput = document.getElementById('income-input');
    incomeInput = parseInt(incomeInput.value);
    return incomeInput;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // getting income input
    const incomeInput = getIncomeInput();
    if(incomeInput < 0){
        alert('insert positive number in income field');
    }
    // geting expenses input
    let foodInput = document.getElementById('food-input');
    foodInput = parseInt(foodInput.value);
    if(foodInput < 0){
        alert('insert positive number in food field');
    }
    let rentInput = document.getElementById('rent-input');
    rentInput = parseInt(rentInput.value);
    if(rentInput < 0){
        alert('insert positive number in rent field');
    }
    let clothesInput = document.getElementById('clothes-input');
    clothesInput = parseInt(clothesInput.value);
    if(clothesInput < 0){
        alert('insert positive number in clothes field');
    }
    // calculate total expenses
    let totalExpenses = document.getElementById('total-expenses');
    const previousExpenses = parseInt(totalExpenses.innerText)
    const newExpenses = previousExpenses + foodInput + rentInput + clothesInput;
    totalExpenses.innerText = newExpenses;
    // calculate balance
    let totalBalance = document.getElementById('total-balance');
    const previousBalance = parseInt(totalBalance.innerText);
    const newBalance = (previousBalance + incomeInput) - parseInt(totalExpenses.innerText);
    totalBalance.innerText = newBalance;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInput = getIncomeInput();

    const totalBalance = document.getElementById('total-balance');
    const previousBalance = parseInt(totalBalance.innerText);

    // getting save input
    let saveInput = document.getElementById('saving-percentage');
    saveInput = parseInt(saveInput.value);
    // calculate saving amount
    const savingAmount = document.getElementById('saving-amount');
    const previousSaving = parseInt(savingAmount.innerText)
    const newSaving = previousSaving + ((incomeInput * saveInput) / 100);
    savingAmount.innerText = newSaving;
    // calculate remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    const previousRemaningBalance = parseInt(remainingBalance.innerText)
    const newRemaningBalance = previousRemaningBalance + (previousBalance - newSaving);
    remainingBalance.innerText = newRemaningBalance;
    
});