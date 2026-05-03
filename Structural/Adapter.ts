class RoundPeg {
    constructor(public readonly radius: number) {}

    public getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    constructor(private readonly width: number) {}

    public getWidth(): number {
        return this.width;
    }
}

class RoundHole {
    constructor(private readonly radius: number) {}

    public getRadius(): number {
        return this.radius;
    }

    public fits(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}

const getRadius = (width: number): number => {
    return width * Math.sqrt(2) / 2
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(getRadius(peg.getWidth()));

        this.peg = peg;
    }

    public getRadius(): number {
        return getRadius(this.peg.getWidth());
    }
}

const main = () => {
    const hole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    hole.fits(roundPeg); // True

    const smallSquarePeg = new SquarePeg(5);
    const largeSquarePeg = new SquarePeg(10);
    hole.fits(smallSquarePeg); // Ошибка, несовместимые типы

    const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
    const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
    hole.fits(smallSquarePegAdapter); // True
    hole.fits(largeSquarePegAdapter); // False
}
