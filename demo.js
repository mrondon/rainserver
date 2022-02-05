var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var PIN = 17;
console.log('Using pin='+PIN);


var led = new Gpio(PIN, 'high'); //use GPIO pin 26 as output

// Toggle the state of the LED connected to GPIO17 every 200ms
const iv = setInterval(_ => {
  console.log('status', led.readSync())
  return  led.writeSync(led.readSync() ^ 1)
}, 1000);

// Stop blinking the LED after 5 seconds
setTimeout(_ => {
  clearInterval(iv); // Stop blinking
  led.unexport();    // Unexport GPIO and free resources
}, 4000);


var value = 0;  // Turn on the LED by default

/****** CONSTANTS******************************************************/

const WebPort = 8080;

