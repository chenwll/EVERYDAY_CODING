// 16进制转rgb颜色
// #34538b -> RGB(52,83,139)
// 16进制转10进制，通过parseInt("0xff")
// 如果是#fab,要先转化成为#ffaabb,将三位变成六位,再进行转化

String.prototype.colorRgb = function(){
    var sColor = this.toLowerCase();
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i=1; i<4; i+=1) {
                sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i=1; i<7; i+=2) {
            sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
        }
        return "RGB(" + sColorChange.join(",") + ")";
    }
    return sColor;
};


var sRgb = "RGB(23, 245, 56)" , sHex = "#fab";
// var sHexColor = sRgb.colorHex();
var sRgbColor = sHex.colorRgb();
