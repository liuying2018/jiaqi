import Vue from 'vue'
import Router from 'vue-router'
import userList from '@/page/account/userList/userList'
import organList from '@/page/account/organList/organList'
import position from '@/page/account/position/position'
import role from '@/page/account/role/role'
import perList from '@/page/account/perList/perList'
import accountInfor from '@/page/perCenter/accountInfor/accountInfor'
import pwModifi from '@/page/perCenter/pwModifi/pwModifi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/userList',
    },{
      path: '/userList',
      component: userList
    },{
      path: '/organList',
      component: organList
    },{
      path: '/position',
      component: position
    },{
      path: '/role',
      component: role
    },{
      path: '/perList',
      component: perList
    },{
      path: '/accountInfor',
      component: accountInfor
    },{
      path: '/pwModifi',
      component: pwModifi
    }
  ]
})
