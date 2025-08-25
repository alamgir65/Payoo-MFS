
var appliedCoupon = 0;

document.getElementById('coupon-btn')
    .addEventListener('click', function () {
        const coupons = ['alamgir65', 'fayeza', 'ayat', 'sathi'];

        const all_coupons = {
            "alamgir65": 7.5,
            "fayeza": 2.21,
            "ayat": 0.75,
            "sathi": 0.25
        };

        const userCoupon = document.getElementById('coupon-code').value;

        if(appliedCoupon > 0){
            alert('You can use a coupon only one time');
            return;
        }

        if (!coupons.includes(userCoupon)) {
            alert('Invalid Coupon Code.');
            return;
        }

        const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
        const percentage = parseFloat(all_coupons[userCoupon] / 100);

        appliedCoupon++;

        const newBalance = parseFloat(totalBalance) + parseFloat(totalBalance * percentage);
        // console.log(userCoupon, totalBalance, percentage, newBalance);
        document.getElementById('total-balance').innerText = newBalance;

    })