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
        return this.items.reduce((sum, item) => sum + item.cost, 0);
    }
}

class Payment {
    charge(amount: number, creditCardNumber: string): string {
        console.log(`💳 Платёж ${amount}₽ с карты ${creditCardNumber}`);
        const orderId = `order_${Date.now()}`;

        return orderId;
    }
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

    placeOrder(creditCardNumber: string, address: string): string {
        const cartCost = this.cart.calculate();
        const shippingCost = this.shipping.calculate(cartCost); // исправлено имя переменной для читаемости
        const totalCost = cartCost + shippingCost;
        const orderId = this.payment.charge(totalCost, creditCardNumber);

        this.shipping.arrange(orderId, address);

        this.cart.clear();

        return orderId;
    }
}

const main = () => {
    const cart = new Cart();
    const payment = new Payment();
    const shipping = new Shipping();

    const orderFacade = new OrderFacade(cart, payment, shipping);

    cart.addItem({ name: 'Механическая клавиатура', cost: 4500 });
    cart.addItem({ name: 'Мышь беспроводная', cost: 2000 });
    cart.addItem({ name: 'Чехол для ноутбука', cost: 800 });

    const orderId = orderFacade.placeOrder('1234', 'г.Владивосток, ул. Русская, д. 21б');

    console.log(`Заказ успешно оформлен! ID: ${orderId}`);
}
