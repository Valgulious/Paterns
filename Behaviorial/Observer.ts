interface Observer<T> {
    update(data: T): void;
}

interface Subject<T> {
    subscribe(observer: Observer<T>): void;

    unsubscribe(observer: Observer<T>): void;

    notify(data: T): void;
}

interface FeedItem {
    title: string;
    text: string;
    date: Date;
}

class Feed implements Subject<FeedItem> {
    private observers: Set<Observer<FeedItem>> = new Set();

    subscribe(observer: Observer<FeedItem>): void {
        this.observers.add(observer);
    }

    unsubscribe(observer: Observer<FeedItem>): void {
        this.observers.delete(observer);
    }

    notify(data: FeedItem): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    publish (title: string, text: string) {
        const feedItem: FeedItem = {
            title,
            text,
            date: new Date(),
        }
        this.notify(feedItem);
    }
}
