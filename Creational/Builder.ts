class Planner {}

interface PlannerBuilder {
    buildDay(date: Date): void;
    addHotel(date: Date, hotelName: string): void;
    addReservation(): void;
    addSpecialEvent(): void;
    addTickets(eventName: string): void;
    getPlanner(): Planner;
}

class VacationBuilder implements PlannerBuilder {
    private planner: Planner;

    constructor() {
        this.planner = new Planner();
    }

    public buildDay(date: Date): void {}

    public addHotel(date: Date, hotelName: string): void {}

    public addReservation(): void {}

    public addSpecialEvent(): void {}

    public addTickets(eventName: string): void {}

    public getPlanner(): Planner {
        return this.planner;
    }
}

class Application {
    public makeVacationPlanner(): Planner {
        const vacationBuilder = new VacationBuilder();
        const date = new Date();

        vacationBuilder.buildDay(date);
        vacationBuilder.addHotel(date, 'Grand Facadian');
        vacationBuilder.addTickets('Patterns on Ice');

        return vacationBuilder.getPlanner();
    }
}
