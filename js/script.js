// Login all functionalities 

document.getElementById('login-btn')
    .addEventListener('click', function (){
        const phoneNumber = '01868194925';
        const pin = 1234;

        const userPhoneNumber = document.getElementById('login-phone-number').value;
        const userPin = document.getElementById('login-pin').value;

        if(phoneNumber == userPhoneNumber && pin == userPin){
            window.location.href = '../home.html';
        }
        else{
            alert('Invalid phone number or pin');
        }
    })