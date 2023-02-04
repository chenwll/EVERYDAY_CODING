function separator(num) {
    return num.replace(/\d{1,3}(?=(\d{3})+$)/g, content => content + ',')
}

console.log(separator('123456789'))
