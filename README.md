[![npm version](https://badge.fury.io/js/raspi-pin-label-translator.svg)](https://badge.fury.io/js/raspi-pin-label-translator)

# raspi-pin-label-translator
This node.js module translates pin labels of a raspberry pi, like GPIO17, into the pin number given by the board layout like P1-11, or just 11 and the other way around.

This can be useful if you use multiple hardware libraries that use different pin labels/namings and you want to use the same naming in your code / config files consequently.

## Supported Devices
Raspberry B+, 2, 3, Zero, Zero W

## Installation
``` bash
$ npm install raspi-pin-label-translator
```

## Usage
You can simply call static methods to do the translation for you:
``` javascript
const PinTranslator = require('raspi-pin-label-translator');

// You can use named or raw pin numbers:
PinTranslator.mapGpioToPinLabel('GPIO17'); // returns 'P1-11'
PinTranslator.mapGpioToPinLabel(17); // returns 'P1-11'

// You can also convert named or raw pin numbers to raw numbers
PinTranslator.mapGpioToPin('GPIO17'); // returns 11
PinTranslator.mapGpioToPin(17); // returns 11
```

You can also map normal board pins to GPIO pins:
``` javascript
const PinTranslator = require('raspi-pin-label-translator');

// Both methods support named and raw pin numbers
PinTranslator.mapPinToGpioLabel(11); // returns 'GPIO17'
PinTranslator.mapPinToGpio('P1-11'); // returns 17
```
