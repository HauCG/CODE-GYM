function flashLamp(status, battery) {
    this.status = status;
    this.battery = battery;
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status){
            alert("it is lighting");
        } else {
            alert("it isn't lighting");
        }
    }
    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}