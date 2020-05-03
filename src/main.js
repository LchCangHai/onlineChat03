import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import vuescroll from 'vuescroll'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://chatroom.mr-lin.site'
// axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  config.headers.token = window.localStorage.getItem('token')
  return config
})

// const options = { path: '/my-app/' } // Options object to pass into SocketIO
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://chatroom.mr-lin.site'), // options object is Optional
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
})
)

Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#cecece',
    minSize: 0.2,
    opacity: 0.8,
    specifyBorderRadius: '5px'
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
