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
    },30000);

    setTimeout(function(){
        move.turn('front_left');
    },60000);

    setTimeout(function(){
        move.turn('front_right');
    },75000);

    setTimeout(function(){
        move.turn('back_left');
    },90000);

    setTimeout(function(){
        move.turn('back_right');
    },105000);

    setTimeout(function(){
        move.stop();
    },120000);
});
