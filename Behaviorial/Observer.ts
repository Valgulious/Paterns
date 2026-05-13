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

    publish(title: string, text: string): void {
        const feedItem: FeedItem = {
            title,
            text,
            date: new Date(),
        };
        this.notify(feedItem);
    }
}

class EmailNotifier implements Observer<FeedItem> {
    update(data: FeedItem): void {
        console.log(`[EMAIL] Новый пост: "${data.title}" (${data.date.toLocaleString()})`);
    }
}

class PushNotifier implements Observer<FeedItem> {
    update(data: FeedItem): void {
        console.log(`[PUSH] Уведомление: ${data.title}`);
    }
}

const main = () => {
    const feed = new Feed();
    
    const emailNotifier = new EmailNotifier();
    const pushNotifier = new PushNotifier();

    feed.subscribe(emailNotifier);
    feed.subscribe(pushNotifier);

    feed.publish('Feed 1', 'Text 1');
    feed.publish('Feed 2', 'Text 2');

    feed.unsubscribe(emailNotifier);

    feed.publish('Feed 3', 'Text 3');

    feed.subscribe(emailNotifier);
    
    feed.publish('Feed 4', 'Text 4');
}
