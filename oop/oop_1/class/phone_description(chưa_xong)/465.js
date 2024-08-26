class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.draftMessage = "";
        this.inbox = [];
        this.sentMessage = [];
        this.isOn = false;
    }

    checkPower() {
        return this.isOn ? "On" : "Off";
    }

    powerOn() {
        this.isOn = true;
    }

    powerOff() {
        this.isOn = false;
    }

    chargeBattery() {
        this.battery = 100;
    }

    composeMessage(message) {
        if (this.isOn && this.battery > 0) {
            this.draftMessage = message;
            this.battery--;
        }
    }

    receiveMessage(message) {
        this.inbox.push(message);
        this.battery--;
    }

    sendMessage(receiver) {
        if (this.isOn && this.battery > 0) {
            receiver.receiveMessage(this.draftMessage);
            this.sentMessage.push(this.draftMessage);
            this.draftMessage = "";
            this.battery--;
        }
    }

    checkInbox() {
        if (this.isOn && this.battery > 0) {
            this.battery--;
            return this.inbox;
        }
    }

    checkSentMessage() {
        if (this.isOn && this.battery > 0) {
            this.battery--;
            return this.sentMessage;
        }
    }
}

let Nokia = new Mobile("Nokia");
let iPhone = new Mobile("iPhone");

Nokia.powerOn();
Nokia.composeMessage("Hello iPhone!");
Nokia.sendMessage(iPhone);

iPhone.powerOn();
console.log(iPhone.checkInbox());