import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Axios.defaults.baseURL = '/foo'
// axios.defaults.withCredentials = true
Axios.interceptors.request.use(config => {
  config.headers.token = window.localStorage.getItem('token')
  return config
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: 'http://chatroom.mr-lin.site',
    rooms: [],
    currentRoomInfo: {},
    currentUserInfo: {},
    creatRoomActive: false,
    allMessages: [],
    message: '',
    messageShow: false
  },
  mutations: {
    initAllMessages (state, data) {
      state.allMessages = data
    },
    addMessage (state, msg) {
      state.allMessages.push(msg)
    },
    setRoomInfo (state, data) {
      state.currentRoomInfo = data
    },
    setUserInfo (state, data) {
      state.currentUserInfo = data
    },
    openShow (state) {
      state.messageShow = true
    },
    closeShow (state) {
      state.messageShow = false
    },
    setRooms (state, res) {
      state.rooms = res
    },
    creatRoomLoading (state, bol) {
      state.creatRoomActive = bol
    }
  },
  actions: {
    getAllMessages (state) {
      console.log('成了！！！！！！！！！！！！！！！！！！！')
      Axios.get('/api/v1/messages/' + window.localStorage.getItem('currentRoom'))
        .then(res => {
          console.log('获取全部消息成功:')
          console.log(res.data)
          state.commit('initAllMessages', res.data.data.messages)
        }).catch(error => {
          console.log('获取全部消息失败：')
          console.log(error)
        })
    },
    getRoomInfo (state) {
      console.log('啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊')
      Axios.get('/api/v1/room/' + window.localStorage.getItem('currentRoom'))
        .then(res => {
          console.log('获取房间消息成功')
          console.log(res.data.data)
          state.commit('setRoomInfo', res.data.data)
        }).catch(error => {
          console.log('获取房间消息失败')
          console.log(error)
        })
    },
    getUserInfo (state) {
      Axios.get('/api/v1/user')
        .then(res => {
          console.log(res.data)
          console.log('获取用户消息成功')
          state.commit('setUserInfo', res.data.data)
        }).catch(error => {
          console.log('获取用户消息失败')
          console.log(error)
        })
    },
    waitshow (state) {
      state.commit('openShow')
      setTimeout(function () {
        state.commit('closeShow')
      }, 2000)
    },
    SOCKET_new_message (state, data) {
      console.log('添加了一条消息:')
      console.log(data)
      state.dispatch('waitClose')
      state.commit('addMessage', data)
    },
    SOCKET_join_room (state, data) {
      console.log(data + '加入啦。。')
    },
    SOCKET_leace_room (state, data) {
      console.log('有人离开啦。。')
    },
    SOCKET_get (state, data) {
      console.log(data)
    }
  },
  modules: {
  }
})
