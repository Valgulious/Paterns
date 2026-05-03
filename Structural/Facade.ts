interface Item {
    name: string;
    cost: number;
}

class Cart {
    items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    getItems(): Item[] {
        return this.items;
    }

    clear(): void {
        this.items = [];
    }

    calculate(): number {
        return this.items.reduce((sum, item) => sum + item.cost, 0)
    }
}

class Payment {
    charge(amount: number, creditCardNumber: string): string {
        console.log(`💳 Платёж ${amount}₽ с карты ${creditCardNumber}`);
        const orderId = `order_${Date.now()}`;

        return orderId;
    };
}

class Shipping {
    calculate(cost: number): number {
        return cost * 0.05;
    }

    arrange(orderId: string, address: string): void {
        console.log(`Доставка заказа ${orderId} до адреса ${address}`);
    }
}

class OrderFacade {
    constructor(
        private readonly cart: Cart,
        private readonly payment: Payment,
        private readonly shipping: Shipping,
    ) {}

    placeOrder(): string {
        const cartCost = this.cart.calculate();
        const shippingConst = this.shipping.calculate(cartCost);
        const totalCost = cartCost + shippingConst;
        const orderId = this.payment.charge(totalCost, '1234');

        this.shipping.arrange(orderId, 'address');

        this.cart.clear();

        return orderId;
    }
}
