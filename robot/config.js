/**
 * Created by myzhou on 2017/2/28.
 * 封装所有相关配置信息(gpio引脚)
 */

// 轮子
exports.wheels = {
    // 左前轮
    front_left: {
        plus: {// 正
            gpio: 16,
        },
        minus: {// 负
            gpio: 19,
        },
    },
    // 左后轮
    back_left: {
        plus: {// 正
            gpio: 16,
        },
        minus: {// 负
            gpio: 19,
        },
    },
    // 右前轮
    front_right: {
        plus: {// 正
            gpio: 20,
        },
        minus: {// 负
            gpio: 26,
        },
    },
    // 右后轮
    back_right: {
        plus: {// 正
            gpio: 20,
        },
        minus: {// 负
            gpio: 26
        },
    }
}
