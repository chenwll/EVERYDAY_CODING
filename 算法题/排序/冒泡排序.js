function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let flag = 0;
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]];
                flag = 1;
            }
        }
        // 如果flag为0，代表后面已经有序了
        if(flag === 0) return;
    }

}

let arr = [2,3,1,7,5,8,0];
bubbleSort(arr,0,arr.length - 1)
console.log(arr)
