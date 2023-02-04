// 2023/2/2

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stk = [];
    for(let item of s) {
        if(!stk.length) stk.push(item);
        else if(stk[stk.length - 1] === item) {
            stk.pop();
        }else {
            stk.push(item)
        }
    }
    return stk.join('')
};
