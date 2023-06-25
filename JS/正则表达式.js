let str = '点头yes摇头no，要说你好喊hello！';
str = str.replace(/[a-z]+/ig, (cnt)=>{
    return " " + cnt + " ";
}).trim();

console.log(str); // => 点头 yes 摇头 no ，要说你好喊 hello！