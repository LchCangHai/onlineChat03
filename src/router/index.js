import Vue from 'vue'
import VueRouter from 'vue-router'
import chatSpace from '../components/chatSpace.vue'
import creatRoom from '../components/creatRoom.vue'
import myInfo from '../components/myInfo.vue'
import Share from '../components/chatSpace/share.vue'
import setRoom from '../components/chatSpace/setRoom.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/chatSpace' },
  {
    path: '/chatSpace',
    component: chatSpace,
    children: [
      { path: '/share', component: Share },
      { path: '/setRoom', component: setRoom }
    ]
  },
  { path: '/creatRoom', component: creatRoom },
  { path: '/myInfo', component: myInfo }
]

const router = new VueRouter({
  routes
})

export default router
