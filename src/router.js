const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/main',
    meta: {
        title: 'main--hh'
    },
    component: (resolve) => require(['./views/main.vue'], resolve)

}];
export default routers;