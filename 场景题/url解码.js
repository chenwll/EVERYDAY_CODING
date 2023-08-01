let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&id=963&city=%E5%8C%97%E4%BA%AC&enabled&id=1.23';

// function getParams(url) {
//     let [, search] = url.split('?');
//     let query = search.split('&');
//     return query.reduce((acc,cur) => {
//        let [key ,value] = cur.split('=');
//        if(value) {
//            value = decodeURI(value);
//            value = /^\d+$/.test(value) ? +value : value;
//            if(acc.hasOwnProperty(key)){
//                acc[key] = [].concat(acc[key],value)
//            }else {
//                acc[key] = value;
//            }
//        }else {
//            acc[key] = true;
//        }
//        return acc;
//     },{})
// }

function getParams(url) {
    const [, search] = url.split('?');
    const value = search.split('&');
    return value.reduce((acc,cur) => {
        let [key, val] = cur.split('=');
        if(val) {
            val = decodeURIComponent(val);
            val = Number.isNaN(Number(val))? val: Number(val);
            if(acc.hasOwnProperty(key)) {
                acc[key] = [].concat(acc[key],val);
            }else {
                acc[key] = val;
            }
        }else {
            acc[key] = true;
        }
        return acc;
    },{})
}



console.log(getParams(url))
