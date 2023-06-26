function thunk(store) {
    return function (next) {
        return function (action) {
            console.log('thunk');
            next(action)
            console.log('thunk afer');
        }
    }
}

reducer 