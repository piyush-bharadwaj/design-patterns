interface IPaymentGateway {
    user: string;
    makePayment(amount: number): void;
}

class ItemStore {
    private amazonPay: any;
    private paymentOption: IPaymentGateway;
    constructor(paymentOption: IPaymentGateway) {
        this.paymentOption = paymentOption;
    }
    purchaseItem(quantity: number) {
        this.paymentOption.makePayment(100 * quantity);
    }
}

class AmazonpayGateway implements IPaymentGateway {
    user: string;
    constructor(user: string) {
        this.user = user;
    }
    makePayment(amount: number) {
        console.info(`${this.user} paid ${amount} via AmazonPay`);
    }
}

class paytmGateway implements IPaymentGateway {
    user: string;
    constructor(user: string) {
        this.user = user;
    }
    makePayment(amount: number) {
        console.info(`${this.user} paid ${amount} via Paytm`);
    }
}

const itemStoreAmazon = new ItemStore(new AmazonpayGateway('Sarat'));
itemStoreAmazon.purchaseItem(6);

const itemStorePaytm = new ItemStore(new paytmGateway('Vijay'));
