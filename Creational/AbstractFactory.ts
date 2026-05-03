interface Shield {
    strength: number;
}

class WoodenShield implements Shield {
    strength: number = 10;
}

class PowerShield implements Shield {
    strength: number = 1000;
}

interface Weapon {
    damage: number;
}

class Sword implements Weapon {
    damage: number = 50;
}

class Blaster implements Weapon {
    damage: number = 500;
}

interface AmmunitionFactory {
    createShield(): Shield;
    createWeapon(): Weapon;
}

class FantasyAmmunitionFactory implements AmmunitionFactory {
    createShield(): Shield {
        return new WoodenShield();
    }

    createWeapon(): Weapon {
        return new Sword()
    }
}

class SciFiAmmunitionFactory implements AmmunitionFactory {   
    createShield(): Shield {
        return new PowerShield();
    }

    createWeapon(): Weapon {
        return new Blaster()
    }
}

class Ammunition {
    shield: Shield;
    weapon: Weapon;

    constructor (factory: AmmunitionFactory) {
        this.shield = factory.createShield();
        this.weapon = factory.createWeapon();
    }
}

const main = () => {
    const fantasyAmmunitionFactory = new FantasyAmmunitionFactory();
    const sciFiAmmunitionFactory = new SciFiAmmunitionFactory();

    const fantasyAmmunition = new Ammunition(fantasyAmmunitionFactory);
    const sciFiAmmunition = new Ammunition(sciFiAmmunitionFactory);
}
