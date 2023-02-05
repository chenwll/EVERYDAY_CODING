const testStr = (str) => {
    return /^[aeiuo]\w+[aeiuo]$/g.test(str)
}
console.log(testStr('abcaw'))
