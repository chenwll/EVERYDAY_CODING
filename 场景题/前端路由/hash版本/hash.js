class HashRouter {
    constructor(routes) {
        this.routes = routes;
        // 绑定this, 不然addListener里面会丢失
        this.refresh = this.refresh.bind(this)
        // 记录一下当前的组件
        this.currentHash = '';
        // 绑定事件
        window.addEventListener('load',this.refresh)
        window.addEventListener('hashchange',this.refresh)
    }

    // hashchange的参数
    refresh(event) {
        console.log('refesh')
        // 触发的是hashchange事件
        if(event.newURL) {
            this.currentHash = event.newURL.split("#")[1];
        }else {
            // load事件，通过window.location.hash拿到
            this.currentHash = window.location.hash.slice(1);
        }
        this.matchURl()
    }

    matchURl() {
        console.log(this.currentHash,'current',this.routes)
        const { component } = this.routes.find((route) => route.path === this.currentHash);
        document.querySelector(".route-content").innerHTML = component;
    }
}

new HashRouter([
    {
        path: '/',
        component: '<div>首页</div>'
    },
    {
        path: '/center',
        component: '<div>个人中心</div>'
    },
    {
        path: '/about',
        component: '<div>关于</div>'
    },
]);


class MyRoute {
    constructor(route) {
        this.route = route;
        this.currentHash = '';
        window.addEventListener('load',this.refresh)
        window.addEventListener('hashchange',this.refresh)
    }

    refresh(event) {
        // hashChange
        if(event.newURL) {
            this.currentHash = event.newURL.split('#')[1];
        }else {
            this.currentHash = event.location.hash.slice(1)
        }
    }

    matchUrl() {

    }


}
