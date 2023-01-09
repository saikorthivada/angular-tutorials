export class SingleTon {
    private static instance: SingleTon;

    private data: string = 'Default Single ton value';
    constructor() {

    }
    public static getInstance() {
        if(!SingleTon.instance) {
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    }

    setData(message: string) {
        this.data = message;
    }

    getData() {
        return this.data;
    }
}

// App component -> Singleton ref 1
// Child component -> Single ton ref 1