function separator(num) {
    return num.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',')
}


const separte = (nums) => {
    return nums.replace(/\d{1,3}(?=(\d{3})+$)/g,content => content + ',')
}


const splitNum = (str) => {
    return str.replace(/\d{1,3}(?=(\d{3})+$)/g, (context) => {
        return context+','
    })
}
console.log(splitNum('1234256789'))
