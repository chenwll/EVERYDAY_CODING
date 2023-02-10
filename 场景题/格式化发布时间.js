// 时间戳 https://juejin.cn/post/6844903695004483597
// 类似于微信朋友圈里面的发布时间，其中发布时间有几种特殊情况：
//
// 小于 1 min，则显示 刚刚；
// 小于 1 h，则显示 x 分钟前；
// 小于 1 天，则显示 x 小时前；
// 小于 1 个星期，则显示 x 天前；
// 否则显示具体时间。

function format(date) {
    // 一分钟是60s
    const MIN = 60*1000;
    const HOUR = 60*MIN;
    const DAY = 24*HOUR;
    const WEEK = 7*DAY;

    if(date < MIN)  return "刚刚";
    if(date < HOUR) return Math.floor(date/MIN) + '分钟前';
    if(date < DAY) return Math.floor(date / HOUR) + ('小时前')
    if(date < WEEK) return Math.floor(date / DAY) + ('天前')
    return new Date(Date.now() - date).toLocaleString()

}
console.log(format(60 * 1000 * 60*899)); // 1 小时
console.log(format(1675932652147))
