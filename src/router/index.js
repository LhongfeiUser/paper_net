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
    meta: {title:'代理列表', icon:'user',role: ['admin','super_editor']},
    children:[
      {
        path: 'article',
        component: ()=>import('@/views/articleManage/index'),
        name: 'article',
        meta:{title:'文章管理', icon:'article',role: ['admin','super_editor']}
      },
      {
        path: 'userList',
        component: ()=>import('@/views/userList/index'),
        name: 'userList',
        meta:{title:'用户列表', icon:'userList',role: ['admin','super_editor']}
      },
      {
        path: 'apply',
        component: ()=>import('@/views/applyForWithdraw/index'),
        name: 'withdraw',
        meta:{title:'申请提现', icon:'applyForWithdraw'}
      },
      {
        path: 'myStatement',
        component: ()=>import('@/views/myStatement/index'),
        name: 'myStatement',
        meta:{title:'收支明细', icon:'applyForWithdraw'}
      },
      {
        path: 'myOrder',
        component: ()=>import('@/views/myOrderDetail/index'),
        name: 'myOrder',
        meta:{title:'订单详情', icon:'applyForWithdraw'}
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
    path: '/prorataManage',
    component: Layout,
    redirect: '/prorataManage/index',
    name: 'prorataManage',
    meta: {
      title: 'prorataManage',
      icon: 'prorataManage'
    },
    children: [
      {
        path: 'index',
        component: ()=>import('@/views/prorataManage/index'),
        name: 'prorataManage',
        meta:{title:'分成设置', icon:'prorataManage'}
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
  { path: '*', redirect: '/404', hidden: true },
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/table',
    name: 'statistics',
    meta: { title: '管理列表', icon: 'table' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '数据统计', icon: 'table' }
      },
      {
        path: 'statement',
        name: 'Statement',
        component: () => import('@/views/statement/index'),
        meta: { title: '收支明细', icon: 'table' }
      },
      {
        path: 'order',
        name: 'OrderDetails',
        component: () => import('@/views/orderDetails/index'),
        meta: { title: '订单详情', icon: 'eye' }
      },
      {
        path:'/withdrawManage',
        name:'withdrawManage',
        component: () => import('@/views/withdrawManage/index'),
        meta: { title:'提现管理', icon:'eye'}
      },
      /*   {
           path: 'myStatement',
           component: ()=>import('@/views/myStatement/index'),
           name: 'myStatement',
           meta:{title:'会员管理', icon:'user',role: ['admin','super_editor']}
         },*/
      {
        path: 'proxy',
        component: ()=>import('@/views/proxyManage/index'),
        name: 'proxy',
        meta:{title:'会员管理', icon:'proxyManage',role: ['admin','super_editor']}
      },
    ]
  },
  // { path: '*', redirect: '/404', hidden: true }
];
