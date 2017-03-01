/**
 * Created by myzhou on 2017/2/16.
 * 封装机器人的移动操作(前进、停止、转弯、后退等)
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Wheel = require('./wheel');
var wheelConfig = require('./config').wheels;

/*
 * 机器人驱动类
 */
function Move(wheels){
    wheels = wheels || wheelConfig;

    // 初始化四个轮子
    try{
        this.front_left = new Wheel(wheels.front_left.plus,wheels.front_left.minus);
        this.back_left = new Wheel(wheels.back_left.plus,wheels.back_left.minus);
        this.front_right = new Wheel(wheels.front_right.plus,wheels.front_right.minus);
        this.back_right = new Wheel(wheels.front_right.plus,wheels.front_right.minus);
    }catch(err){
        this.emit('error',err);
    }
}

util.inherits(Move,EventEmitter);

// 前进
Move.prototype.forward = function(){
    // 四轮向前驱动
    this.front_left.forward();
    this.front_right.forward();
    this.back_left.forward();
    this.back_right.forward();

    this.emit('forward');
}

// 后退
Move.prototype.back = function(){
    // 四轮向后驱动
    this.front_left.back();
    this.front_right.back();
    this.back_left.back();
    this.back_right.back();

    this.emit('back');
}

// 停车
Move.prototype.stop = function(){
    this.front_left.stop();
    this.front_right.stop();
    this.back_left.stop();
    this.back_right.stop();

    this.emit('stopp');
}

// 转弯
Move.prototype.turn = function(direction){
    direction = direction || 'front_left';

    switch (direction) {
        case 'front_left':
            // 左前方向转弯
            this.front_left.stop();
            this.back_left.stop();

            this.front_right.forward();
            this.back_right.forward();

            this.emit('front_left');
            return;
        case 'front_right':
            // 右前方向转弯
            this.front_right.stop();
            this.back_right.stop();

            this.front_left.forward();
            this.back_left.forward();

            this.emit('front_right');
            return;
        case 'back_left':
            // 左后方向转弯
            this.front_left.stop();
            this.back_left.stop();

            this.front_right.back();
            this.back_right.back();

            this.emit('back_left');
            return;
        case 'back_right':
            // 左后方向转弯
            this.front_right.stop();
            this.back_right.stop();

            this.front_left.back();
            this.back_left.stop();

            this.emit('back_right');
            return;
        default:
            this.emit('error', new Error('The right direction is needed!'));
    }
}

module.exports = Move;