/**
 * 小团生日收到妈妈送的两个一模一样的数列作为礼物！
 * 他很开心的把玩，不过不小心没拿稳将数列摔坏了！
 * 现在他手上的两个数列分别为 A 和 B，长度分别为 n 和 m。
 * 小团很想再次让这两个数列变得一样。
 * 他现在能做两种操作：操作一是将一个选定数列中的某一个数 a 改成数 b，这会花费|b-a|的时间，
 * 操作二是选择一个数列中某个数 a，将它从数列中丢掉，花费|a|的时间。
 * 小团想知道，他最少能以多少时间将这两个数列变得再次相同！
 * 输入描述：第一行两个空格隔开的正整数 n 和 m，分别表示数列 A 和 B 的长度。
 * 接下来一行 n 个整数，分别为 A1 A2…An 
 * 接下来一行 m 个整数，分别为 B1 B2…Bm 对于所有数据，1 ≤ n,m ≤ 2000， |Ai|,|Bi| ≤ 10000 
 * 输出一行一个整数，表示最少花费时间，来使得两个数列相同。
 */


// 思路: 从左往右进行递归,枚举所有的可能性

const minCost = (A ,B, ai,bi) => {
    // 说明都递归完毕,可以直接返回了
    if(A.length === ai && B.length === bi) {
        return 0;
    }

    // A递归完毕但是B没有递归完, 就只能把B中剩余元素删除，计算删除B元素的代价
    if(A.length === ai && B.length !== bi) {
        return B[bi] + minCost(A, B, ai,bi + 1);
    }

    // 同理
    if(A.length !== ai && B.length === bi) {
        return A[ai] + minCost(A, B, ai + 1, bi);
    }

    // 都不一样，分情况进行选择, 写case
    
    // 删除A[i]
    const p1 = A[ai] + minCost(A, B, ai + 1, bi);

    // 删除B[i]
    const p2 = B[bi] + minCost(A, B, ai, bi + 1);

    // 替换
    const p3 = (Math.abs(A[ai] - B[bi])) + minCost(A, B, ai + 1, bi + 1);

    return Math.min(p1, Math.min(p2,p3));

}

console.log(minCost([2,1,3],[3,2],0,0));