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

const main = () => {
    const consoleStrategy = new ConsoleStrategy();
    const fileStrategy = new FileStrategy();
    const databaseStrategy = new DatabaseStrategy();

    const logger = new Logger(consoleStrategy);

    logger.log("Application started");

    logger.setStrategy(fileStrategy);
    logger.log("User registered: john_doe");

    logger.setStrategy(databaseStrategy);
    logger.log("Transaction completed: #12345");
}
