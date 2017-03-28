import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['pages/signout/'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['pages/home/'], resolve),
                children: [
                    {
                      path: '/tab1',
                      component: resolve => require(['pages/home/tab1'], resolve)
                    },
                    {
                      path: '/tab2',
                      component: resolve => require(['pages/home/tab2'], resolve)
                    }
                ]
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['pages/index/'], resolve)
            },
            {
                path: '/about', //关于我们
                component: resolve => require(['pages/us/about'], resolve)
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
]