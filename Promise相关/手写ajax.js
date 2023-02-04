const xhr = new XMLHttpRequest();

xhr.open('GET', '' ,true)
xhr.onreadystatechange = function () {
    if(this.readyState !== 4) return;
    if(this.readyState === 200){
        console.log(this.response);

    }else{
        throw new Error('err')
    }
}
xhr.send()

// 扩展
// 设置请求失败时的监听函数
xhr.onerror = function () {
    console.error(this.statusText);
};
// 设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
// 发送 Http 请求
xhr.send(null);
