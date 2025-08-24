document.getElementById('add-money-box')
    .addEventListener('click', function (event){
        document.getElementById('add-money-form').classList.remove('hidden');

        document.getElementById('cashout-form').classList.add('hidden');
        // document.getElementById('add-money-form').classList.add('visible');
    })


document.getElementById('cashout-box')
    .addEventListener('click', function (event){
        document.getElementById('cashout-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
    })