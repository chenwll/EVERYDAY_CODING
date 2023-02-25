let a = () => {
    console.log('a')
}

let b = () => {
    console.log(b)
}

b = a;
b() //a
