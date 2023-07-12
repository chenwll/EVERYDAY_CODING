const taskTime = [5,3,4,2,6,5];
const need = [[1,0],[3,1],[3,2],[4,2],[5,4]];

const readline = require('readline');

const finishTash = (need) => {
    const len = taskTime.length;
    const tree = new Array(len).fill(-1).map(() => new Set());
    const degree = new Array(len).fill(0);
    const res = new Array(len).fill(0);
    for(let [after,before] of need) {
        tree[before].add(after);
        degree[after]++;
    }
    let zero = [];
    for(let i = 0; i < degree.length; i++) {
        if(degree[i] === 0) {
            zero.push(i);
        }
    }
    while(zero.length) {
        // 入度为0的点
        const idx = zero.shift();
        // 入度为0的点先计算时间
        res[idx] += taskTime[idx];
        // 再进行广播
        for(let item of tree[idx]) {
            res[item] = Math.max(res[idx],res[item]);
            if(--degree[item] === 0) {
                zero.push(item);
            }
        }
    }
    return res;
}

console.log(finishTash(need));