/**
 * Created by myzhou on 2017/2/18.
 * raspberry pi所有引脚配置说明(类型、占用情况、当前状态)
 */

// 引脚类型
const PIN_TYPE = {
    GPIO:        'GPIO',
    HIGHT_POWER: 'HIGHT_POWER',
    LOWER_POWER: 'LOWER_POWER',
    GROUND:      'GROUND',
    I2C:         'I2C',
    SPI:         'SPI',
    URAT:        'URAT',
};

function Pin(config) {
    config = config || {};

    this.type = config.type || PIN_TYPE.GPIO;  // 引脚类型
    this.occupied = config.occupied || false;  // 占用情况
    this.status = config.status || 0;          // 状态(1:高电平 0:低电平)
}

/*
 * raspberry pi引脚初始化
 */
var Pins = {
    // TODO:
}
/*
 * 申请使用引脚
 * 当引脚是GPIO且没有被占用时，可以申请成功
 * @param:
 * @return: true/false
 */
Pin.prototype.apply = function(){

}

module.exports = Pin;
