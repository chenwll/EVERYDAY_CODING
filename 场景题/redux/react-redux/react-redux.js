// react-redux 如何更新react组件
// 从第一性原理理解：
// 不做任何的数据校验, 只要store更新, 就刷新组件

// react-redux = Provider + Context

// Provider: 共享数据源的容器组件
// Connect: 消费共享数据的高阶组件
// 数据依靠 Context API 完成共享

// context.js

export const ReactReduxContext = React.createContext(null)

// class 版本的provider 
export default class ClassicProvider extends React.Component {
    constructor(props,context) {
        this.store = props.store
    }

    getChildrenContext() {
        return {store: this.store}
    }

    render() {
        return React.Children.only(this.props.children)
    }
}

connect(
    (state) => {
        
    }
)(Class)

const ClassicConnect = (
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options = {}
) => {

}

const Provider = ({store, children}) => {

}