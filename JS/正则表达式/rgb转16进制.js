// rgb颜色转16进制
// RGB(23, 245, 56) -> #17f538
String.prototype.colorHex = function(){
    var that = this;
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是rgb颜色表示
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i=0; i<aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex.length < 2) {
                hex = '0' + hex;    
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;    
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/,"").split("");
        if (aNum.length === 6) {
            return that;    
        } else if(aNum.length === 3) {
            var numHex = "#";
            for (var i=0; i<aNum.length; i+=1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    }
    return that;
};

// 10进制变成16进制 parseInt(s1).toString(16)
var colorHex = function(value) {
    console.log(value.replace(/[^\d,]/g,""));
    var color = value.replace(/[^\d,]/g,"").replace(/(\d+)/g, function(s, s1) {
        return parseInt(s1).toString(16);
    });
    console.log(color);
    return '#'+color.replace(/,/g, "").toUpperCase();
};

const res = colorHex("RGB(23, 245, 56)");
console.log(res);

// var sRgb = "RGB(23, 245, 56)" , sHex = "#fab";
// // var sHexColor = sRgb.colorHex();
// var sRgbColor = sHex.colorRgb();