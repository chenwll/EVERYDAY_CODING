const validDate = (d1, d2) => {
    const day1 = new Date(d1);
    const day2 = new Date(d2);
    const res  = [];
    const daysTime = 24*60*60*1000;
    const startTime = day1.getTime();
    const range = day2.getTime() - startTime
    let total = 0;
    while(total <= range&& range > 0) {
        res.push(new Date(startTime + total).toLocaleDateString().replace(/\//g,'-'));
        total += daysTime;
    }
    return res;
}

console.log(validDate('2015-2-8','2015-3-3'))
