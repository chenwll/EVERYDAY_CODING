// 最好的情况是O(N)，最差的时候是O(N^2)，所以平时说的O(N*logN)
const quickSort = (arr,l,r) => {
    if(l >= r) return;
    let x = arr[l + r >> 1];
    let i = l - 1, j = r + 1;
    while(i < j) {
        while(arr[++i] < x);
        while(arr[--j] > x);
        if(i < j) {
            [arr[i],arr[j]] = [arr[j], arr[i]];
        }
    }
    quickSort(arr,l ,j);
    quickSort(arr,j + 1, r);
}
let arr = [2,3,1,7,5,8,0];
quickSort(arr,0,arr.length - 1)
console.log(arr)
