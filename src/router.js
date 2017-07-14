const routers = [{
    path: '/',
    meta: {
        title: '后台登录'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/main',
    meta: {
        title: '后台管理中心' //这个是title标题
    },
    component: (resolve) => require(['./views/main.vue'], resolve)

}];
export default routers;