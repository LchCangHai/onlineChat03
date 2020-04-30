import Vue from 'vue'
import VueRouter from 'vue-router'
import chatSpace from '../components/chatSpace.vue'
import creatRoom from '../components/creatRoom.vue'
import myInfo from '../components/myInfo.vue'

import Share from '../components/chatSpace/share.vue'
import setRoom from '../components/chatSpace/setRoom.vue'
import profile from '../components/myInfo/Profile.vue'
import set from '../components/myInfo/set.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', redirect: '/home/chatSpace' },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: 'chatSpace',
        component: chatSpace,
        children: [
          { path: 'share', component: Share },
          { path: 'setRoom', component: setRoom }
        ]
      },
      {
        path: 'creatRoom',
        component: creatRoom
      },
      {
        path: 'myInfo',
        redirect: 'Info',
        component: myInfo,
        children: [
          {
            path: 'Info',
            components: {
              profile: profile,
              settings: set
            }
          }
        ]
      }
    ]
  }
  // {
  //   path: '/chatSpace',
  //   component: chatSpace,
  //   children: [
  //     { path: '/share', component: Share },
  //     { path: '/setRoom', component: setRoom }
  //   ]
  // },
  // {
  //   path: '/creatRoom',
  //   component: creatRoom
  // },
  // {
  //   path: '/myInfo',
  //   redirect: '/Info',
  //   component: myInfo,
  //   children: [
  //     {
  //       path: '/Info',
  //       components: {
  //         profile: profile,
  //         settings: set
  //       }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  routes
  // mode: 'hash'
})

export default router
