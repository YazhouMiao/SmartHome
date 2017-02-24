/**
 * Created by myzhou on 2017/1/16.
 * SmartHome 硬件启动程序
 */

var five = require('johnny-five');
var Raspi = require('raspi-io');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready',function(){
    var move = require('./move');

    move.forward();

    setTimeout(function(){
        move.back();
    },10000);

    setTimeout(function(){
        move.turn('front_left');
    },20000);

    setTimeout(function(){
        move.turn('front_right');
    },35000);

    setTimeout(function(){
        move.turn('back_left');
    },50000);

    setTimeout(function(){
        move.turn('back_right');
    },65000);

    setTimeout(function(){
        move.stop();
    },80000);
});
