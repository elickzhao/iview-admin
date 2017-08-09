const routers = [{
    path: '/',
    meta: {
        title: '后台登录'
    },
    component: (resolve) => require(['./views/login.vue'], resolve) //这个resolve原来是懒加载的意思. 不是一次性加载组件,访问哪个加载哪个
}, {
    path: '/main',
    meta: {
        title: '后台管理中心' //这个是title标题
    },
    component: (resolve) => require(['./views/main.vue'], resolve),
    subRoutes: {
        '/sub1': {
            component: (resolve) => require(['./views/sub1.vue'], resolve),
        },
        '/sub2': {
            component: (resolve) => require(['./views/sub2.vue'], resolve),
        },
        '/sub3': {
            component: (resolve) => require(['./views/sub3.vue'], resolve),
        }
    }

}];
export default routers;