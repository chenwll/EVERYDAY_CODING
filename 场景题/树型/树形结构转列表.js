let tree = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1,
                children: [
                    {
                        id: 3,
                        text: '节点1_1_1',
                        parentId: 2,
                    },
                    {
                        id: 4,
                        text: '节点1_1_2',
                        parentId: 2,
                    }
                ]
            }
        ]
    }
]

// function treeToArr(arr) {
//     const ans = []
//     const dfs = (arr) => {
//         for(let item of arr) {
//             if(item.children) {
//                 dfs(item.children);
//                 delete item.children;
//             }
//             ans.push(item);
//         }
//     }
//     dfs(arr);
//     return ans;
// }

const treeToArr = (arr) => {
    const res = [];
    const dfs = (arr) => {
        for(let item of arr) {
            const {children} = item;
            if(Array.isArray(children)) {
                dfs(children);
                delete item.children;
            }
            res.push(item);
        }
    }
    dfs(arr);
    return res;

}

console.log(treeToArr(tree))
