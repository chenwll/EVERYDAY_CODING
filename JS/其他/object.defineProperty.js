const obj = {
    name:'cwl'
}

Object.defineProperty(obj,"name",{
    get: () => {
        return 'hhh'
    },
    set: () => {
        console.log('设置值')
        return 'wwww'
    }
})

console.log(obj.name)
obj.name = 'lzn'

