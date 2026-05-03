interface Command {
    execute(): void;
}

class Dialog {
    private isOpen: boolean = false;

    open(): void {
        this.isOpen = true;
    }

    close(): void {
        this.isOpen = false;
    }
}

class CloseCommand implements Command {
    constructor(private readonly dialog: Dialog) {}

    execute(): void {
        this.dialog.close();
    }
}

class OpenCommand implements Command {
    constructor(private readonly dialog: Dialog) {}

    execute(): void {
        this.dialog.open();
    }
}
