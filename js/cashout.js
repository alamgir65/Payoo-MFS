// console.log('Hello from add-money.js');

document.getElementById('cashout-btn')
    .addEventListener('click', function (e){
        // e.preventDefault();
        const agentNumber = document.getElementById('cashout-agent-number').value;
        const amount = document.getElementById('cashout-amount').value;
        const pin = document.getElementById('cashout-account-pin').value;

        const totalBalance = document.getElementById('total-balance').innerText;


        if(agentNumber.length < 6){
            alert('Agent Number must be atleast 6 digit');
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