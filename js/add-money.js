// console.log('Hello from add-money.js');

document.getElementById('add-money-btn')
    .addEventListener('click', function (e){
        e.preventDefault();
        const bankName = document.getElementById('add-bank-name').value;
        const accountNumber = document.getElementById('add-account-number').value;
        const amount = document.getElementById('add-amount').value;
        const pin = document.getElementById('add-account-pin').value;

        const totalBalance = document.getElementById('total-balance').innerText;

        const registerdBank = ['brac', 'eastern', 'islami'];
        if(registerdBank.includes(bankName) == false || accountNumber != 1234 || pin != 1234 || amount <= 0 || amount > 100000){
            alert('Invalid input. Please check your information again.');
            return;
        }

        const newBalance = parseFloat(totalBalance) + parseFloat(amount);
        document.getElementById('total-balance').innerText = newBalance;


    })