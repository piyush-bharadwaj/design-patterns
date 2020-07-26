/** Class Store is dependent on other classes*/
class Store {
    constructor(user: string) {
        this.amazonPay = new AmazonPay(user);
    }
    purchaseFaceMask(quantity: number) {
        this.amazonPay.makePayment(100 * quantity);
    }
}

class AmazonPay {
    user: string;
    constructor(user: string) {
        this.user = user;
    }
    makePayment(amount: number) {
        console.info(`${this.user} paid ${amount} via AmazonPay`);
    }
}

const store = new Store('Sarat');
store.purchaseFaceMask(5);
