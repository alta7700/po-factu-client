export function getRandomString(
    size: number,
    chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
): string {
    const charsCount = chars.length;
    let res = "";
    while (res.length < size) {
        res += chars[Math.floor(Math.random() * charsCount)];
    }
    return res;
}

export class SimpleHandler<D extends any[]> {
    private handlers: ((...data: D) => void)[];

    constructor() {
        this.handlers = [];
    }

    subscribe(handler: (...data: D) => void): () => void {
        this.handlers.push(handler);
        return () => this.unsubscribe(handler);
    }
    unsubscribe(handler: (...data: D) => void): void {
        const idx = this.handlers.findIndex(v => v === handler);
        if (idx !== -1) this.handlers.splice(idx, 1);
    }
    handle(...data: D) {
        this.handlers.forEach(h => h(...data));
    }
}
