/**
 * Created by myzhou on 2017/3/1.
 * 手动控制智能机器人行进
 */
var router = require('express').Router();
// var Move = require('../robot/move');
// var move = new Move();

router.get('/',function(req,res,next){
    res.render('drive');
});

router.post('/',function(req,res,next){
    switch(req.body.opt){
        case 'forward':
            // move.forward();
            res.json({errcode:0});
            break;

        case 'back':
            // move.back();
            res.json({errcode:0});
            break;

        case 'stop':
            // move.stop();
            res.json({errcode:0});
            break;

        case 'front_left':
            // move.turn('front_left');
            res.json({errcode:0});
            break;

        case 'front_right':
            // move.turn('front_right');
            res.json({errcode:0});
            break;

        case 'back_left':
            // move.turn('back_left');
            res.json({errcode:0});
            break;

        case 'back_right':
            // move.turn('back_right');
            res.json({errcode:0});
            break;

        default:
            res.json({errcode:1});
    }
});

module.exports = router;
