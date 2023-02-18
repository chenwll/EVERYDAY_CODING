function getType(type) {
    if( type === null) return 'null';
    if(typeof type === 'object') return Object.prototype.toString.call(type).slice(8,-1).toLowerCase();
    return  typeof type;
}
