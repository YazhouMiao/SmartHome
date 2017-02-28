/**
 * Created by myzhou on 2017/2/16.
 * 封装机器人的移动操作(前进、停止、转弯、后退等)
 */

var Gpio = require('onoff').Gpio;

// 轮子
var wheels = {
    // 左前轮
    front_left: {
        plus: new five.Pin('P1-29'), // 正
        minus: new five.Pin('P1-31'), // 负
    },
    // 左后轮
    back_left: {
        plus: new five.Pin('P1-29'), // 正
        minus: new five.Pin('P1-31'), // 负
    },
    // 右前轮
    front_right: {
        plus: new five.Pin('P1-36'), // 正
        minus: new five.Pin('P1-37'), // 负
    },
    // 右后轮
    back_right: {
        plus: new five.Pin('P1-36'), // 正
        minus: new five.Pin('P1-37'), // 负
    }
}

var move = {};

// 前进
move.forward = function(){
    // 四轮向前驱动
    start(wheels.front_left);
    start(wheels.front_right);

    start(wheels.back_left);
    start(wheels.back_right);
}

// 后退
move.back = function(){
    // 四轮向后驱动
    start(wheels.front_left,false);
    start(wheels.front_right,false);

    start(wheels.back_left,false);
    start(wheels.back_right,false);
}

// 转弯
move.turn = function(direction){
    direction = direction || 'front_left';

    switch (direction) {
        case 'front_left':
            // 左前方向转弯
            stop(wheels.front_left);
            stop(wheels.back_left);

            start(wheels.front_right);
            start(wheels.back_right);

            return;
        case 'front_right':
            // 右前方向转弯
            stop(wheels.front_right);
            stop(wheels.back_right);

            start(wheels.front_left);
            start(wheels.back_left);

            return;
        case 'back_left':
            // 左后方向转弯
            stop(wheels.front_left);
            stop(wheels.back_left);

            start(wheels.front_right,false);
            start(wheels.back_right,false);

            return;
        case 'back_right':
            // 左后方向转弯
            stop(wheels.front_right);
            stop(wheels.back_right);

            start(wheels.front_left,false);
            start(wheels.back_left,false);

            return;
    }
}

move.stop = function(){
    stop(wheels.front_left);
    stop(wheels.front_right);
    stop(wheels.back_left);
    stop(wheels.back_right);
}

function start(wheel,status){
    status = status || false;

    if(status){
        wheel.plus.high();
        wheel.minus.low();
    } else {
        wheel.plus.low();
        wheel.minus.high();
    }
}

function stop(wheel){
    wheel.plus.low();
    wheel.minus.low();
}

module.exports = move;