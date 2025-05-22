interface paymentProcessor {
  pay(amount: string): boolean;
}

class payPal implements paymentProcessor {
  pay(amount: string) {
    console.log('Paypal Payment done. ', amount);
    return true;
  }
}

class razorPay implements paymentProcessor {
  pay(amount: string) {
    console.log('Razorpay Payment done.', amount);
    return true;
  }
}

const razorPayPayment = new razorPay();
const payPalPayment = new payPal();

razorPayPayment.pay('100');
payPalPayment.pay('200');
