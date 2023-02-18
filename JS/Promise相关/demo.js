const delay = (time) => {
    console.log('delay')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}

function *gen() {
    console.log('res')
    let res = yield delay()

}
var g = gen();
// var result = g.next();

// console.log(result)






