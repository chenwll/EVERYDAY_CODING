function mergeSort(arr,l,r) {
    if(l >= r) return;
    let mid = l + r >> 1;
    mergeSort(arr,l ,mid);
    mergeSort(arr,mid + 1,r);
    let i = l, j = mid + 1, k = 0, tmp = [];
    while(i <= mid && j <= r){
        // <=
        if(arr[i] <= arr[j]) {
            tmp[k++] = arr[i++];
        }else {
            tmp[k++] = arr[j++];
        }
    }
    // 还要记得把剩余的也放进去
    while(i <= mid) tmp[k++] = arr[i++];
    while(j <= r) tmp[k++] = arr[j++];
    for(let i = 0; i < tmp.length; i++) {
        arr[l++] = tmp[i];
    }
}

let arr = [2,3,1,7,5,8,0];
mergeSort(arr,0,arr.length - 1);
console.log(arr)
