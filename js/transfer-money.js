// console.log('Hello from add-money.js');

document.getElementById('transfer-btn')
    .addEventListener('click', function (e){
        // e.preventDefault();
        const accountNumber = document.getElementById('transfer-user-account-number').value;
        const amount = document.getElementById('transfer-amount').value;
        const pin = document.getElementById('transfer-account-pin').value;

        const totalBalance = document.getElementById('total-balance').innerText;


        if(accountNumber.length < 6){
            alert('Account Number must be atleast 6 digit');
            return;
        }
        else if(pin != 1234){
            alert('Incorrect PIN');
            return ;
        }
        else if(amount <= 0 || amount > 100000 || amount > totalBalance){
            alert('Invalid amount.');
            return;
        }

        const newBalance = parseFloat(totalBalance) - parseFloat(amount);
        document.getElementById('total-balance').innerText = newBalance;

    })