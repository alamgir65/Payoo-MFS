document.getElementById('pay-btn')
    .addEventListener('click', function(){


        const pay_types = ['current', 'wasa','govt'];

        const payType = document.getElementById('pay-type-name').value;
        const accountNumber = document.getElementById('pay-biller-account-number').value;
        const amount = document.getElementById('pay-amount').value;
        const pin = document.getElementById('pay-account-pin').value;

        const totalBalance = document.getElementById('total-balance').innerText;


        if(accountNumber.length < 6){
            alert('Account Number must be atleast 6 digit');
            return;
        }
        else if(!pay_types.includes(payType)){
            alert('Invalid payment type');
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