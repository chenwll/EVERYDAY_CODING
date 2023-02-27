let arr =   [,1, 9, 2, 8, 3, 7, 4, 6, 5]
let cnt = arr.length - 1;
let n = arr.length - 1;
function down(u, size) {
    let t = u;
    if(2*u <= size&&arr[2*u] < arr[t]) t = 2*u;
    if(2*u + 1 <= size && arr[2*u + 1] < arr[t]) t = 2*u + 1;
    if(t !== u) {
        [arr[t], arr[u]] = [arr[u], arr[t]];
        down(t,size);
    }
}

for(let i = arr.length - 1 >> 1;i; i--) {
    down(i,cnt);
    // arr[1] = arr[cnt--];
}
for(let i = arr.length - 1; i; i--) {
    [arr[1], arr[i]] = [arr[i],arr[1]]
    n--;
    down(1, n)
}
console.log(arr)
