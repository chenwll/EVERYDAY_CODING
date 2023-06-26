// 其实送通过enhance演变过来的
// logger thunk  reducer

function applyMiddleware(...middlewares) {
    return function (createStore) {
        return function (reducer,preloadedState) {
            // 创建store
            var store = createStore(reducer,preloadedState);
            // 阉割版的store
            var middlewareAPI = {
                getState: store.getState,
                dispatch: store.dispatch,
            }

            // 调用中间件的第一层函数
            var chain = middlewares.map((middleware) => middleware(middlewareAPI));
            var dispatch = compose(...chain)(store.dipatch);
            return {
                ...store,
                dispatch,
            }
        }
    }
}


function compose() {
    var funcs = [...arguments];
    return  function (dispatch) {
        for(var i = funcs.length; i >= 0; i--) {
            dispatch = func[i].length(dispatch);
        }
        return dispatch;
    }
}

/**
 * redux里面中applyMiddleware就运用了洋葱模型,applyMiddleware的功能是加强dispatch
 * 本来通过dispatch可以触发reducer,但是我们通过中间件，先触发中间件中的函数函数
 * applyMiddleware其实是通过enhance函数来的,所以applyMiddleware函数的实现也是符合enhance函数的格式的
 * 他里面返回了一个函数，参数是createStore, 这个函数又返回了一个函数,参数是reducer,preloadedState
 * 
 * 实现中间件需要传递store,next,action 所以实现一个中间件函数里面需要返回一个函数, 用于传递next方法，即要执行的下一个中间件
 * 同时还要传递action, 又需要返回一个函数
 * 
 * 通过map循环执行一次函数,把store传递进去, 返回的就是一层需要传递next方法的函数，这时候用到了函数组合compose的思想
 * 我们需要重后往前执行这个数组
 * 因为当我们的中间件是最后一个的时候,我们需要去执行dispatch方法,同时后一个的中间件又可以作为参数传递给前面一个中间件
 * 这样我们调用前一个中间件的next方法，其实执行的是下一个函数
 * 最后我们返回了一个新的dispatch方法, 当我们调用新的dispatch时候, 就会想洋葱模型一样,先调用第一个函数,通过next调用第二个函数
 * 最后执行核心的reduce方法,执行完成之后,又从内到外依次执行返回
 */
