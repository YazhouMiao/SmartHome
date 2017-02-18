var five = require('johnny-five');
var Raspi = require('raspi-io');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready',function(){
    var pin = new five.Pin('P1-7');

    var val = setInterval(function(){
        pin.query(function(status){
            pin.write(!status);
            console.log(status);
        });
    },2000);

    setTimeout(function(){
        clearInterval(val);
        console.log('cleared');
    },10000);
});