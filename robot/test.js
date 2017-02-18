var five = require('johnny-five');
var Raspi = require('raspi-io');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready',function(){
    var pin = new five.Pin('P1-7');

    var counter = 0;
    var val = setInterval(function(){
        if(counter % 2 == 0){
            pin.high();
        } else {
            pin.low();
        }
    },2000);

    setTimeout(function(){
        clearInterval(val);
        pin.low();
        console.log('cleared');
    },60000);
});