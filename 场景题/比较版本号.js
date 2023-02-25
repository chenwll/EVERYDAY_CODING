/**
 * 2023/2/21
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
    let ver1 = version1.split('.');
    let ver2 = version2.split('.');
    for (let i = 0, j = 0; i < ver1.length || j < ver2.length; i++, j++) {
        let x = ver1[i] ? +ver1[i] : 0;
        let y = ver2[j] ? +ver2[j] : 0;
        if (x > y) return 1;
        else if (x < y) return -1;
    }
    return 0;
};
