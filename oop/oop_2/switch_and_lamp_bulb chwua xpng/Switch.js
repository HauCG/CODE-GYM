class Switch {
    constructor(bulb, status) {
        this.bulb = bulb;
        this.status = status;
    }

    switchOff() {
        this.bulb.setStatus(false);
        this.status = false;
    }

    switchOn() {
        this.bulb.setStatus(true);
        this.status = true;
    }

    getStatus() {
        return this.bulb.getStatus() ? 'On' : 'Off';
    }
}
