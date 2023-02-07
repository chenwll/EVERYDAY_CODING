// findIndex((element, index, array) => { /* … */ } )

Array.prototype.myFindIndex = function (cb) {
    let arr = Array.prototype.slice.call(this);
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i],i,this)){
            return i;
        }
    }
}
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.myFindIndex(isLargeNumber));
