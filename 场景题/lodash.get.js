// 字节考过
const obj = {
    a: {
        b: 123
    },
    arr: [
        {
            demo: 'demo'
        }
    ]
}
function getKey(obj, str) {
   const newPath = str.replace(/\[/g,'.').replace(/\]/g,'').split('.');
   console.log(newPath);
   return newPath.reduce((o,k) => {
    return (o || {})[k]; 
  },obj)
}

console.log(getKey(obj, 'a.b'));
console.log(getKey(obj, 'arr[0].demo'));