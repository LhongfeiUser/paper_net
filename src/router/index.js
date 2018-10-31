import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path:'/userManage',
    component: Layout,
    redirect: '/userManage/userList',
    name:'userManage',
    meta: {title:'代理商列表', icon:'user'},
    children:[
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '数据统计', icon: 'table' }
      },
      {
        path: 'myOrder',
        component: ()=>import('@/views/myOrderDetail/index'),
        name: 'myOrder',
        meta:{title:'订单详情', icon:'applyForWithdraw'}
      },
      {
        path: 'userList',
        component: ()=>import('@/views/userList/index'),
        name: 'userList',
        meta:{title:'用户列表', icon:'userList'}
      },
      {
        path: 'myStatement',
        component: ()=>import('@/views/myStatement/index'),
        name: 'myStatement',
        meta:{title:'我的分成', icon:'applyForWithdraw'}
      },
      {
        path: 'apply',
        component: ()=>import('@/views/applyForWithdraw/index'),
        name: 'withdraw',
        meta:{title:'申请提现', icon:'applyForWithdraw'}
      },
    ]
  },
  {
    path: '/uploadFunction',
    component: Layout,
    redirect: '/uploadFunction/index',
    name: 'uploadFunction',
    meta: {
      title: 'uploadFunction',
      icon: 'upLoad'
    },
    children: [
      {
        path: 'index',
        component: ()=>import('@/views/uploadFunction/index'),
        name: 'upload',
        meta:{title:'上传功能', icon:'upLoad'}
      },
    ]
  },
  {
    path: '/generalizeLink',
    component: Layout,
    redirect: '/generalizeLink/index',
    name: 'generalizeLink',
    meta: {
      title: 'generalizeLink',
      icon: 'generalizeLink'
    },
    children: [
      {
        path: 'index',
        component: ()=>import('@/views/generalizeLink/index'),
        name: 'generalize',
        meta:{title:'推广链接', icon:'generalizeLink'}
      },
    ]
  },
  {
    path: '/operationCourse',
    component: Layout,
    redirect: '/operationCourse/index',
    name: 'operationCourse',
    meta: {
      title: 'operationCourse',
      icon: 'operationCourse'
    },
    children: [
      {
        path: 'index',
        component: ()=>import('@/views/operationCourse/index'),
        name: 'operation',
        meta:{title:'操作教程', icon:'operationCourse'}
      },
    ]
  },
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/manageLists',
    component: Layout,
    redirect: '/manageLists/table',
    name: 'manageLists',
    meta: { title: '总管理列表', icon: 'table' },
    children: [
      {
        path: 'vipManage',
        component: ()=>import('@/views/vipManage/index'),
        name: 'vipManage',
        meta:{title:'会员管理', icon:'tree',role: ['admin','super_editor']}
      },
      {
        path: 'articleManage',
        component: ()=>import('@/views/articleManage/index'),
        name: 'articleManage',
        meta:{title:'文章管理', icon:'article',role: ['admin','super_editor']}
      },
      {
        path: '/orderManage',
        name: 'orderManage',
        component: () => import('@/views/orderManage/index'),
        meta: { title: '订单管理', icon: 'eye' },
        children:[
          {
            path: 'proxyOrderDetail',
            name: 'proxyOrderDetail',
            component: () => import('@/views/proxyOrderDetail/index'),
            meta: { title: '订单详情', icon: 'table' }
          },

          {
            path:'proxyOrderList',
            name:'proxyOrderList',
            component: () => import('@/views/proxyOrderList/index'),
            meta: { title:'订单列表', icon:'eye'}
          },
          {
            path:'proxyOrderAmend',
            name:'proxyOrderAmend',
            component: () => import('@/views/proxyOrderAmend/index'),
            meta: { title:'订单修改', icon:'eye'}
          },
        ]
      },
      {
        path: '/agentManage',
        component: ()=>import('@/views/agentManage/index'),
        name: 'articleManage',
        meta:{title:'代理商管理', icon:'article',role: ['admin','super_editor']},
        children:[
          {
            path:'proxyDataStatistics',
            name:'proxyDataStatistics',
            component: () => import('@/views/proxyDataStatistics/index'),
            meta: { title:'数据统计', icon:'eye',role: ['admin','super_editor']}
          },
          {
            path:'proxyStatement',
            name:'proxyStatement',
            component: () => import('@/views/proxyStatement/index'),
            meta: { title:'收支明细', icon:'eye',role: ['admin','super_editor']}
          },
          {
            path: 'sharedSetting',
            component: ()=>import('@/views/sharedSetting/index'),
            name: 'sharedSetting',
            meta:{title:'分成设置', icon:'eye',role: ['admin','super_editor']}
          },
          {
            path:'withdrawManage',
            name:'withdrawManage',
            component: () => import('@/views/withdrawManage/index'),
            meta: { title:'提现管理', icon:'eye',role: ['admin','super_editor']}
          },
        ]
      },
      {
        path:'/detectingSystem',
        name:'detectingSystem',
        component: () => import('@/views/detectingSystem/index'),
        meta: { title:'检测系统管理', icon:'eye',role: ['admin','super_editor']}
      },
      {
        path:'/notePortManage',
        name:'notePortManage',
        component: () => import('@/views/notePortManage/index'),
        meta: { title:'短信接口管理', icon:'eye',role: ['admin','super_editor']}
      },
      {
        path:'/payPortManage',
        name:'payPortManage',
        component: () => import('@/views/notePortManage/index'),
        meta: { title:'支付接口管理', icon:'eye',role: ['admin','super_editor']}
      },
      {
        path:'/advertisingManage',
        name:'advertisingManage',
        component: () => import('@/views/advertisingManage/index'),
        meta: { title:'广告窗口管理', icon:'eye',role: ['admin','super_editor']}
      },
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
];
