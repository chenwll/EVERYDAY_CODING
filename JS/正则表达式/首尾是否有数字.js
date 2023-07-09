let reg = /^\d|\d$/g;//或
let reg2 = /^\d[\s\S]*\d$/g;//都

//\s是指空白，包括空格、换行、tab缩进等所有的空白，而\S刚好相反
// 这样一正一反下来，就表示所有的字符，完全的，一字不漏的。

var str = ' as '
//方法1
str = str.replace(/\s*/g,"");//去除所有空格
str = str.replace(/^\s*|\s*$/g,"");//去除两头空格
str = str.replace(/^\s*/,"");//去除左边空
str = str.replace(/(\s*$)/g,"");//去除右边空格
//方法2：trim()方法：只能去除两边空格
function trim(str) {
  if (str && typeof str === "string") {
    return str.replace(/^\s*|\s*$/g, "");//去除前后空白符
  }
}

console.log(trim(str));
//方法3 jquery $.trim(str)