//主函数，line事件触发
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var inputs = [], n = 0, q = []
rl.on('line', function (line) {
    //每次触发line事件，就push到inputs数组
    inputs.push(line);
    //输入了两个后，退出输入
    if (inputs.length == 2) {
        //赋值n
        n = parseInt(inputs[0])
        //分隔字符串成数组,trim()去除两端空格,split(" ")根据空格分割把字符串组成数组。
        q = inputs[1].trim().split(' ');
        //数组的字符串元素转数字
        q.forEach((e, i) => {
            q[i] = parseInt(e)
        });


        //调用快排模板
        quick_sort(q, 0, n-1)

        //定义输出字符串
        var printfLine=''
        q.forEach((e)=>{
            //每一项加空格
            printfLine+=e+' '
        })
        console.log(printfLine.trim());
        process.exit()
    }
})
//快排模板
function quick_sort( q,  l,  r)
{
    if (l >= r) return;
    //l+r>>1 是位操作符，与c++相同，表示(l+r)/2取整数
    i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) {
            // swap(q[i], q[j]); 交换q[i]与q[j]，js没有swap
            let nB=q[i];
            q[i]=q[j];
            q[j]=nB;
        }
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);

}
