function separator(num) {
    return num.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',')
}


const separte = (nums) => {
    return nums.replace(/\d{1,3}(?=(\d{3})+$)/g,content => content + ',')
}

console.log(separte('1234256789'))
