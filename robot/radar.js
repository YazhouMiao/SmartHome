/**
 * Created by admin on 2017/3/7.
 * 超声波雷达测距相关操作
 */
var Gpio = require('onoff').Gpio;
var radarConfig = require('./config').radar;

function Radar(radarConfig){
    var radarConfig = radarConfig || {};
    this.trigger = new Gpio(radarConfig.trigger,'out');
    this.receiver = new Gpio(radarConfig.receiver,'in','both');
    this.times = radarConfig.times;
}

Radar.prototype.detect = function(){
    var flag = true,counter = 0,start;

    this.trigger.writeSync(1);
    this.trigger.writeSync(0);

    while(true){
        if(this.receiver.readSync()){

        }
    }
}



