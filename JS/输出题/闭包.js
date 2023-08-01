function f1(params) {
    var n=999;
    function f2(params) {
        return n=n+1
    }
    return f2
}
var a=f1()
a()
a()
a()
