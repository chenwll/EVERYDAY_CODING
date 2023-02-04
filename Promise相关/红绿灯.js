// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；让三个灯不断交替重复亮灯？
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}


/**
 *
 * @param timer
 * @param light
 * @param callback
 */
// const task = (timer,light, callback) => {
//     setTimeout(() => {
//         if(light === 'red') red()
//         else if(light === 'green') green()
//         else if(light === 'yellow') yellow();
//
//         callback()
//     },timer)
// }

// 只是循环了一次
// task(3000, 'red', () => {
//     task(2000, 'green', () => {
//         task(1000, 'yellow', Function.prototype)
//     })
// })

// 重复循环，当一轮执行完成之后，再次重新执行step
// const step = () => {
//     task(3000, 'red', () => {
//         task(2000, 'green', () => {
//             task(1000, 'yellow', step)
//         })
//     })
// }
// step()


// 利用promise
const task = (timer,light) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(light === 'red') red();
            else if(light === 'green') green();
            else if(light === 'yellow') yellow();

            resolve()
        },timer)
    })
}

const step = () => {
    task(3000,'red')
        .then(() =>task(2000,'green'))
        .then(() =>task(1000,'yellow') )
        .then(step)
}
step()
