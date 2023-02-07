const random = n => Math.floor(Math.random() * (n + 1))

// 可生成重复的随机验证码
function randomCode () {
    return [0, 0, 0, 0, 0, 0].map(() => random(9))
}
console.log(randomCode())


// 不可生成重复的随机验证码
const shuffle = (list) => list.sort((x, y) => Math.random() - 0.5)
const randomUniqueCode = () => shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6)
console.log(randomUniqueCode())
