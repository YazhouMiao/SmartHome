/**
 * Created by myzhou on 2017/1/16.
 * SmartHome 硬件启动程序
 */

var five = require('johnny-five');
var Raspi = require('raspi-io');
var move = require('./move');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready',function(){

    move.forward();

    setTimout(function(){
        move.back();
    },30000);

    setTimout(function(){
        move.turn('front_left');
    },60000);

    setTimout(function(){
        move.turn('front_right');
    },70000);

    setTimout(function(){
        move.turn('back_left');
    },80000);

    setTimout(function(){
        move.turn('back_right');
    },90000);

    setTimout(function(){
        move.stop();
    });
});
