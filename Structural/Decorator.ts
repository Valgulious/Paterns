interface Burger {
    getCost(): number;
}

class Wapper implements Burger {
    getCost(): number {
        return 100;
    }
}

class BurgerDecorator implements Burger {
    constructor(private readonly wrappee: Burger) {}

    getCost(): number {
        return this.wrappee.getCost();
    }
}

class CheeseeDecorator extends BurgerDecorator {
    constructor(wrappee: Burger, private readonly amount: number) {
        super(wrappee);
    }

    getCost(): number {
        return super.getCost() + this.amount * 10;
    }
}

const main = () => {
    const basicBurger: Burger = new Wapper();
    console.log(`🍔 Базовый бургер: ${basicBurger.getCost()} ₽`);

    const burgerWithCheese: Burger = new CheeseeDecorator(basicBurger, 2);
    console.log(`С сыром (2 шт): ${burgerWithCheese.getCost()} ₽`);

    const extraCheese: Burger = new CheeseeDecorator(burgerWithCheese, 3);
    console.log(`С сыром (2+3 шт): ${extraCheese.getCost()} ₽`);
}
