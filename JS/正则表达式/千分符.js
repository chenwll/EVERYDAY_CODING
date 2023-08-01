const split = (str) => {
    const res = str.replace(/(\d{1,3})(\d{3})+/g,(content,$1,$2) => {
        console.log($1,$2);
    })
}

 split('12345678');
// console.log(res)
