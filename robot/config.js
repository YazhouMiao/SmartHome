/**
 * Created by myzhou on 2017/2/28.
 * 封装所有相关配置信息(gpio引脚)
 */

// 轮子
exports.wheels = {
    // 左前轮
    front_left: {
        plus: 16,// 正
        minus: 19,// 负
    },
    // 左后轮
    back_left: {
        plus: 16,// 正
        minus: 19,// 负
    },
    // 右前轮
    front_right: {
        plus: 20,// 正
        minus: 26,// 负
    },
    // 右后轮
    back_right: {
        plus: 20,// 正
        minus: 26,// 负
    }
}

// 超声波
exports.radar = {
    trigger: 11,    // 触发GPIO引脚
    receiver: 12,   // 接收GPIO引脚
    frequence: 10,  // 每次有效测量的频率
}
