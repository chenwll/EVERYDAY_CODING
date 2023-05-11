let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&id=963&city=%E5%8C%97%E4%BA%AC&enabled';

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
    let [,search] = url.split('?');
    const s = search.split('&');
    return s.reduce((acc,cur) => {
       let [key,value] = cur.split('=');
       if(value){
           value = decodeURI(value);
           if(/^\d+$/g.test(value)) value = Number(value);
           if(acc.hasOwnProperty(key)) acc[key] = [].concat(acc[key],value);
           else acc[key] = value
       }else{
           acc[key] = true;
       }
       return acc
    },{})
}



console.log(getParams(url))
