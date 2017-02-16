/**
 * Created by myzhou on 2017/2/16.
 * 封装机器人的移动操作(前进、停止、转弯、后退等)
 */

// 配置信息
var config = {
    wheels: {
        // 左前轮
        front_left: {
            // gpio:
        },
        // 右前轮
        front_right: {
            // gpio:
        },
        // 左后轮
        back_left: {
            // gpio:
        },
        // 右后轮
        back_right: {
            // gpio:
        }
    },
}

var move = {};

// 前进
move.forward = function(){
    // TODO:
}

// 后退
move.back = function(){
    // TODO:
}

move.turn = function(direction){
    direction = direction || 'left';

    if(direction == 'left'){

    } else if(direction == 'right'){

    } else {
        throw new Error('The value of direction have to be "left" or "right"!');
    }
}
