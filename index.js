class RaspiPinLabelTranslator {
    static mapPinToGpioLabel(pin, rawMode) {
        let rawPin = ("" + pin).replace(/(P\D-)(0|)/, '');
        let result = pinGpioMapping["P1-" + rawPin];

        return returnValue(result, rawMode);
    }

    static mapPinToGpio(pin) {
        return this.mapPinToGpioLabel(pin, true);
    }

    static mapGpioToPinLabel(gpio, rawMode) {
        let rawGpioPin = ("" + gpio).replace(/^\D+/g, '');
        let result = Object.keys(pinGpioMapping).find(key => pinGpioMapping[key] === "GPIO" + rawGpioPin); 

        return returnValue(result, rawMode);
    }

    static mapGpioToPin(gpio) {
        return this.mapGpioToPinLabel(gpio, true);
    }
}

let returnValue = function(value, rawMode) {
    if(value && rawMode) {
        value = value.replace(/(P1-|GPIO)/, '');
    }

    return value;
}

const pinGpioMapping = {
    "P1-3"  : "GPIO2",
    "P1-5"  : "GPIO3",
    "P1-7"  : "GPIO4",
    "P1-8"  : "GPIO14",
    "P1-10" : "GPIO15",
    "P1-11" : "GPIO17",
    "P1-12" : "GPIO18",
    "P1-13" : "GPIO27",
    "P1-15" : "GPIO22",
    "P1-16" : "GPIO23",
    "P1-18" : "GPIO24",
    "P1-19" : "GPIO10",
    "P1-21" : "GPIO9",
    "P1-22" : "GPIO25",
    "P1-23" : "GPIO11",
    "P1-24" : "GPIO8",
    "P1-26" : "GPIO7",
    "P1-29" : "GPIO5",
    "P1-31" : "GPIO6",
    "P1-32" : "GPIO12",
    "P1-33" : "GPIO13",
    "P1-35" : "GPIO19",
    "P1-36" : "GPIO16",
    "P1-37" : "GPIO26",
    "P1-38" : "GPIO20",
    "P1-40" : "GPIO21",
    "P5-3" : "GPIO28",
    "P5-4" : "GPIO29",
    "P5-5" : "GPIO30",
    "P5-6" : "GPIO31",
}

module.exports = RaspiPinLabelTranslator;