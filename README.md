interface IProvider{
    sendMessage(message:string):void;
    connect(config: unknown):void;
    dissconnect():void;
}

class Telegramm implements IProvider{
    sendMessage(message:string) {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    dissconnect(): void {
        console.log('Dissonnect TG');
    }
    
}

class WhatsApp implements IProvider{
    sendMessage(message:string) {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    dissconnect(): void {
        console.log('Dissonnect Wp');
    }
    
}

class NotificationSender{
    constructor(private provider: IProvider){
    }

    send(){
        this.provider.connect('mama');
        this.provider.dissconnect();
        this.provider.sendMessage('mama');
    }
}

class DelayNot extends NotificationSender{
    constructor(provider: IProvider){
        super(provider);
    }
    sendDelay(){
    }
}

const sender = new NotificationSender(new Telegramm());
sender.send;