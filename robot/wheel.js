/**
 * Created by myzhou on 2017/2/28.
 * 机器人轮子
 */
var EventEmitter = require('events').EventEmitter;
var Gpio = require('onoff').Gpio;

/*
 * 轮子
 * @param: plus 正极gpio
 * @param: minus 负极gpio
 */
function Wheel(plus,minus){
    this.plus = new Gpio(plus,'out');
    this.minus = new Gpio(minus,'out');
}

Wheel.prototype.__proto__ = EventEmitter.prototype;

Wheel.prototype.start = function(){
    this.emit('start');
}

Wheel.prototype.stop = function(){
    this.emit('stop');
}