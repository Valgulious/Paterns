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
