// Logout DOM 
document.getElementById('logout-btn')
    .addEventListener('click', function(){
        // console.log('Logout button clicked');
        window.location.href = '../index.html';
    })




document.getElementById('add-money-box')
    .addEventListener('click', function (event){
        document.getElementById('add-money-form').classList.remove('hidden');

        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('transfer-money-form').classList.add('hidden');
        document.getElementById('get-bonus-form').classList.add('hidden');
        document.getElementById('pay-bill-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
    })


document.getElementById('cashout-box')
    .addEventListener('click', function (event){
        document.getElementById('cashout-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('transfer-money-form').classList.add('hidden');
        document.getElementById('get-bonus-form').classList.add('hidden');
        document.getElementById('pay-bill-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
    })


document.getElementById('transfer-money-box')
    .addEventListener('click', function(){
        document.getElementById('transfer-money-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('get-bonus-form').classList.add('hidden');
        document.getElementById('pay-bill-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
    })


document.getElementById('get-bonus-box')
    .addEventListener('click', function(){
        document.getElementById('get-bonus-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('transfer-money-form').classList.add('hidden');
        document.getElementById('pay-bill-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
    })


document.getElementById('pay-bill-box')
    .addEventListener('click', function(){
        document.getElementById('pay-bill-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('transfer-money-form').classList.add('hidden');
        document.getElementById('get-bonus-form').classList.add('hidden');
        document.getElementById('transaction-section').classList.add('hidden');
    })



document.getElementById('transactions-box')
    .addEventListener('click', function(){
        document.getElementById('transaction-section').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('transfer-money-form').classList.add('hidden');
        document.getElementById('get-bonus-form').classList.add('hidden');
        document.getElementById('pay-bill-form').classList.add('hidden');
    })
