class Planner {
    days: Date[] = [];
    hotels: { date: Date; name: string }[] = [];
    tickets: string[] = [];

    reset(): void {
        this.days = [];
        this.hotels = [];
        this.tickets = [];
    }
}

interface PlannerBuilder {
    buildDay(date: Date): void;
    addHotel(date: Date, hotelName: string): void;
    addTickets(eventName: string): void;
    getPlanner(): Planner;
}

class VacationBuilder implements PlannerBuilder {
    private planner: Planner;

    constructor() {
        this.planner = new Planner();
    }

    public buildDay(date: Date): void {
        this.planner.days.push(date);
    }

    public addHotel(date: Date, hotelName: string): void {
        this.planner.hotels.push({ date, name: hotelName });
    }

    public addTickets(eventName: string): void {
        this.planner.tickets.push(eventName);
    }

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

const main = () => {
    const app = new Application();
    const planner = app.makeVacationPlanner();

    console.log(planner);
}
