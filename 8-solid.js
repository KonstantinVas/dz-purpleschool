'use strict';

class Billing {

    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixBilling extends Billing {

    constructor(amount) {
        super(amount);
    }
    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {

    constructor(amount) {
        super(amount);
    }
    calculateTotal(hour) {
        return this.amount * hour;
    }
}

class ItemBilling extends Billing {

    constructor(amount) {
        super(amount);
    }
    calculateTotal(item) {
        return this.amount *= item;
    }
}

const billing = new Billing(384);

const fixBilling = new FixBilling(billing.amount);
console.log('FixBilling', fixBilling.calculateTotal());

const hourBilling = new HourBilling(billing.amount);
console.log('HourBilling', hourBilling.calculateTotal(8));

const itemBilling = new ItemBilling(billing.amount);
console.log('ItemBilling', itemBilling.calculateTotal(10));
