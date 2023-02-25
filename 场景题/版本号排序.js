let arr = ['0.1.1.0','0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]

function cmp(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');

    for(let i = 0,j = 0; i < v1.length || j < v2.length; i++,j++) {
        let x = v1[i]? + v1[i] : 0;
        let y = v2[i]? + v2[i] : 0;
        if(x > y) return 1;
        else if(x < y) return -1;
    }
    return v1.length - v2.length;
}

arr.sort(cmp);
console.log(arr)
