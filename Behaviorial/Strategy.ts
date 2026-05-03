interface LoggerStratery {
    log(text: string): void;
}

class ConsoleStrategy implements LoggerStratery {
    log(text: string): void {
        console.log(`Log ${text} to console`);
    }
}

class FileStrategy implements LoggerStratery {
    log(text: string): void {
        console.log(`Log ${text} to file`);
    }
}

class DatabaseStrategy implements LoggerStratery {
    log(text: string): void {
        console.log(`Log ${text} to database`);
    }
}

class Logger {
    constructor(private strategy: LoggerStratery) {}

    setStrategy(strategy: LoggerStratery): void {
        this.strategy = strategy;
    }

    log(text: string): void {
        this.strategy.log(text);
    }
}
