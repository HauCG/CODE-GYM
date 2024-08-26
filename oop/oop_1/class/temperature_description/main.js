class Temperature {
    cTem;
    constructor(cTem) {
        this.cTem = cTem;
    }
    cToF() {
        return this.cTem * 9 / 5 + 32;
    }
    cToK() {
        return this.cTem + 273.15;
    }
}
let newTemperature = new Temperature(25);
let fTem = newTemperature.cToF();
let kTem = newTemperature.cToK();
alert(fTem + "   " + kTem);