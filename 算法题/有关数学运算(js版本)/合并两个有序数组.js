let nums1 = [1, 4, 7, 9];
let nums2 = [2, 3, 6, 8, 19, 21];

const merge = (nums1, nums2) => {
   let res = [];
   let i = 0,j = 0;
   while(i < nums1.length&&j < nums2.length) {
       if(nums1[i] > nums2[j]) {
           res.push(nums2[j]);
           j++;
       }else {
           res.push(nums1[i]);
           i++;
       }
   }
   while(i < nums1.length) {
       res.push(nums1[i]);
       i++;
   }
    while(j < nums2.length) {
        res.push(nums2[j]);
        j++;
    }
    return res;
}


console.log(merge(nums1,nums2))
// const merge = function(nums1, m, nums2, n) {
//     let k = m + n - 1;
//     let i = m - 1, j = n - 1;
//     while(i >= 0&& j >= 0) {
//         if(nums1[i] > nums2[j]) {
//             nums1[k--] = nums1[i--];
//         }else {
//             nums1[k--] = nums2[j--];
//         }
//     }
//     while(j > 0) {
//         nums1[k--] = nums2[j--];
//     }
// };

