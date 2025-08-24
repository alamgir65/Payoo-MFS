// console.log('Hello from add-money.js');

document.getElementById('cashout-btn')
    .addEventListener('click', function (e){
        e.preventDefault();
        const agentNumber = document.getElementById('cashout-agent-number').value;
        const amount = document.getElementById('cashout-amount').value;
        const pin = document.getElementById('cashout-pin').value;

        const totalBalance = document.getElementById('total-balance').innerText;

        console.log(agentNumber, amount, pin);
        console.log('Hello from cashout.js'); 
        return;

        if(agentNumber != 1234 || pin != 1234 || amount <= 0 || amount > 100000){
            alert('Invalid input. Please check your information again.');
            return;
        }else if(amount > totalBalance){
            alert('Insufficient balance');
            return;
        }

        const newBalance = parseFloat(totalBalance) - parseFloat(amount);
        document.getElementById('total-balance').innerText = newBalance;


    })