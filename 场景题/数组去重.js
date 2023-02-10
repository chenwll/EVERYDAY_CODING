// set里面判断是使用严格相等的 但是NaN和NaN是相等的，所以会对NaN进行去重
// 使用IndexOf 也是严格相等，但是NaN是不等于NaN的， [1,2,NaN].indexOf(NaN) = -1
