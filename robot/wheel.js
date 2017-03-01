/**
 * Created by myzhou on 2017/2/28.
 * 机器人轮子
 */

var Gpio = require('onoff').Gpio;

/*
 * 轮子
 * @param: plus 正极gpio
 * @param: minus 负极gpio
 */
function Wheel(plus,minus){
    this.plus = new Gpio(plus,'out');
    this.minus = new Gpio(minus,'out');
    this.status = 'stop'; // one of ['stop'、'forward'、'back']
}

// 前进
Wheel.prototype.forward = function(){
    // 正极为高电平、负极为低电平
    this.plus.writeSync(1);
    this.minus.writeSync(0);
    this.status = 'forward';
}

// 停止
Wheel.prototype.stop = function(){
    // 正、负极同时为低电平
    this.plus.writeSync(0);
    this.minus.writeSync(0);
    this.status = 'stop';
}

// 后退
Wheel.prototype.back = function(){
    // 正极为低电平、负极为高电平
    this.plus.writeSync(0);
    this.minus.writeSync(1);
    this.status = 'back';
}

/*
 * wheel正负极不能同时为高电平
 */
function validCheck(wheel){
    if(!wheel instanceof Wheel){
        throw new Error('param "wheel" must be a instance of Wheel!');
    }
}

module.exports = Wheel;