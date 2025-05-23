"use strict";
class payPal {
    pay(amount) {
        console.log('Paypal Payment done. ', amount);
        return true;
    }
}
class razorPay {
    pay(amount) {
        console.log('Razorpay Payment done.', amount);
        return true;
    }
}
const razorPayPayment = new razorPay();
const payPalPayment = new payPal();
razorPayPayment.pay('100');
payPalPayment.pay('200');
