// 刷题记录
// 2023/2/1 写的依托答辩
const totalFruit = function (fruits) {
    let res = 0;
    const obj = {}
    for(let i = 0, j = 0, s= 0; i < fruits.length; i++) {

        if(!obj[fruits[i]]){
            obj[fruits[i]] = 1;
            s++;
        }else obj[fruits[i]]++;
        while(s > 2) {
            obj[fruits[j]]= obj[fruits[j]] - 1 ;
            if(obj[fruits[j]] === 0) {
                s--;
            }
            j++;
        }
        res = Math.max(res, i - j + 1);
    }
    return res;
};

