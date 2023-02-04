const arr =[
    {
        name: "可乐",
        categories: ["热门", "饮料"],
    },
    {
        name: "苹果",
        categories: ["热门", "食物"],
    },
    {
        name: "洗衣液",
        categories: ["生活用品"],
    },
];

const ans =[
    { name: "热门", categories: ["可乐", "苹果"] },
    { name: "饮料", categories: ["可乐"] },
    { name: "食物", categories: ["苹果"] },
    { name: "生活用品", categories: ["洗衣液"] },
];

const changeArr = (arr) => {
    const map = new Map()
    arr.forEach((item) => {
        let categories = item.categories;
        categories.forEach((cate) => {
            if(map.has(cate)){
                map.set(cate,[...map.get(cate),item.name])
            }else {
                map.set(cate,[item.name]);
            }

        })
    })
    let res = [];
// for(const [key ,val] of map) {
//     let obj  = {};
//     obj.name = key;
//     obj.categories = val;
//     res.push(obj)
// }

    // 学到了遍历Map的方法
    for(let [key, value] of map.entries()){
        let obj = {
            name:key,
            categories:value,
        }
        res.push(obj)
    }
    console.log(res)
}

