/**
 * Created by myzhou on 2017/1/16.
 * SmartHome的所有供外部调用的操作
 */
var raspi = require('robot-io');
var five = require('johnny-five');
var actions = require('./actions');
var board = new five.Board({
    io: new raspi()
});

board.on('ready',function(){
    (new five.Led('P1-7')).strobe();

    // TODO:do other smart things
});

