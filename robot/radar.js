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
    var flag = true,
        difftime = 0,
        proStart,

    rpio.write(this.trigger, rpio.HIGH);
    rpio.usleep(10);
    rpio.write(this.trigger, rpio.LOW);

    proStart = process.hrtime();
    while(true){
        if(flag && rpio.read(this.receiver)){
            flag = false;
            start = process.hrtime();
        }

        if(!flag && !rpio.read(this.receiver)){
            let hrtime = process.hrtime(start);
            difftime = hrtime[0] * 1e6 + hrtime[1] / 1e3; // 时间差(us)
            break;
        }

        if(process.hrtime(proStart)[0] > 5) break;
    }

    console.log(1e6 / 34321 * difftime);
}



