/**
 * Created by admin on 2017/3/7.
 * 超声波雷达测距相关操作
 */
var rpio = require('rpio');
var radarConfig = require('./config').radar;

rpio.init({mapping: 'gpio'});

function Radar(radarConfig){
    var radarConfig = radarConfig || {};
    this.trigger = radarConfig.trigger;
    this.receiver = radarConfig.receiver;
    this.times = radarConfig.times;

    rpio.open(this.trigger, rpio.OUTPUT, rpio.LOW);
    rpio.open(this.receiver, rpio.INPUT);
}

Radar.prototype.detect = function(){
    var flag = true,counter=0,hrtime=[0,0],
        difftime = 0,
        proStart;

    rpio.msleep(30);
    rpio.write(this.trigger, rpio.HIGH);
    rpio.usleep(10);
    rpio.write(this.trigger, rpio.LOW);

    while(true){

        if(flag && rpio.read(this.receiver)){
            start = process.hrtime();
            flag = false;
        }

        if(!flag && !rpio.read(this.receiver)){
            hrtime = process.hrtime(start);
            break;
        }

        counter++;
        if(counter >= 100000) break;
    }

    return (34321 * hrtime[1] * 0.5 / 1e9);
}


module.exports = Radar;
