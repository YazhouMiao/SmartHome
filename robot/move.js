/**
 * Created by myzhou on 2017/2/16.
 * 封装机器人的移动操作(前进、停止、转弯、后退等)
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Wheel = require('./wheel');
var wheelConfig = require('./config').wheels;

// 轮子
var Wheels = {
    // 左前轮
    front_left: new Wheel(wheelConfig.front_left.plus,wheelConfig.front_left.minus),
    // 左后轮
    back_left: new Wheel(wheelConfig.back_left.plus,wheelConfig.back_left.minus),
    // 右前轮
    front_right: new Wheel(wheelConfig.front_right.plus,wheelConfig.front_right.minus),
    // 右后轮
    back_right: new Wheel(wheelConfig.back_right.plus,wheelConfig.back_right.minus),
}

var move = {};

util.inherits(move,EventEmitter);

// 前进
move.forward = function(){
    // 四轮向前驱动
    Wheels.front_left.forward();
    Wheels.front_right.forward();
    Wheels.back_left.forward();
    Wheels.back_right.forward();

    move.emit('forward');
}

// 后退
move.back = function(){
    // 四轮向后驱动
    Wheels.front_left.back();
    Wheels.front_right.back();
    Wheels.back_left.back();
    Wheels.back_right.back();

    move.emit('back');
}

// 停车
move.stop = function(){
    Wheels.front_left.stop();
    Wheels.front_right.stop();
    Wheels.back_left.stop();
    Wheels.back_right.stop();

    move.emit('stopp');
}

// 转弯
move.turn = function(direction){
    direction = direction || 'front_left';

    switch (direction) {
        case 'front_left':
            // 左前方向转弯
            Wheels.front_left.stop();
            Wheels.back_left.stop();

            Wheels.front_right.forward();
            Wheels.back_right.forward();

            move.emit('front_left');
            return;
        case 'front_right':
            // 右前方向转弯
            Wheels.front_right.stop();
            Wheels.back_right.stop();

            Wheels.front_left.forward();
            Wheels.back_left.forward();

            move.emit('front_right');
            return;
        case 'back_left':
            // 左后方向转弯
            Wheels.front_left.stop();
            Wheels.back_left.stop();

            Wheels.front_right.back();
            Wheels.back_right.back();

            move.emit('back_left');
            return;
        case 'back_right':
            // 左后方向转弯
            Wheels.front_right.stop();
            Wheels.back_right.stop();

            Wheels.front_left.back();
            Wheels.back_left.stop();

            move.emit('back_right');
            return;
        default:
            move.emit('error', new Error('The right direction is needed!'));
    }
}

module.exports = move;