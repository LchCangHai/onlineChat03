<template>
  <div class="container">
    <div class="main" :style="{width: toggle == true ? '75%' : '100%'}">
      <div class="header">
        <div class="infoShow">
          <div class="avatar">
            <img :src="roomData.avatar" />
          </div>
          <div class="textInfo-h">
            <strong>{{roomData.name}}</strong>
            <span>{{roomData.memberNum + 'member(s)' + '-' + roomData.topic}}</span>
          </div>
        </div>
        <div class="headerSet">
          <img src="../assets/image/icon_search.png" @click="searchBtn" />
          <img src="../assets/image/icon_addperson.png" @click="invite" />
          <img src="../assets/image/icon_more.png" @click="infoSet" />
          <div class="setMune" v-show="isSetInfo">
            <div class="dropdownMenu" @click="mute">
              <span>Mute</span>
              <i class="el-icon-s-operation"></i>
            </div>
            <div class="dropdownMenu" @click="Delete">
              <span>Delete</span>
              <i class="el-icon-delete"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="body" @click="hideAbsolute">
        <button
          type="button"
          class="scrollToDown"
          ref="toDown"
          @click="scrollToDown"
        ></button>
        <div
          class="searchPane"
          v-show="isSearching"
          :style="{width: toggle == true ? 'calc(75% - 58px)' : 'calc(100% - 75px)'}"
        >
          <div class="searchContainer">
            <input class="searchInput"
                   placeholder="Search this chat"
                   v-model="searchText" />
            <i class="el-icon-search"></i>
          </div>
        </div>
        <vue-scroll ref="vs">
          <div class="chatSpace">
            <div
              v-for="item in allMessages"
              :class="{ myChat: item.author.id.toString() === currentUser.toString(),
                        otherChat: item.author.id.toString() !== currentUser.toString() }"
              :key="item.id"
            >
              <div class="chatText">
                <div class="chatName">{{item.author.username}}</div>
                {{item.content}}
                <div class="chatTime">{{item.create_at}}</div>
              </div>
              <div class="chatAvatar">
                <img :src="item.author.avatar" />
              </div>
            </div>
          </div>
        </vue-scroll>
      </div>
      <div class="Emoji"
           v-bind:style="emojiRight"
      >
        <VEmojiPicker class="emoji"
                      @select="selectEmoji"
                      v-show='isEmoji'>
        </VEmojiPicker>
      </div>
      <div class="footer">
      <div class="chatInput">
        <textarea class="inText"
                  placeholder="Type your message..."
                  v-model="inText"
                  @click="hideAbsolute"
                  @keyup.enter="submit"
        >
        </textarea>
      </div>
      <div class="chatHandle">
        <span class="iconfont icon-smile"
              @click="chemoji"
        >
        </span>
<!--        <i class="el-icon-paperclip"></i>-->
        <i
          class="icon3 el-icon-s-promotion"
           @click="submit"
        ></i>
      </div>
      </div>
    </div>
    <div class="Raside" :style="{width: toggle == true ? '25%' : '0px'}" v-show="toggle">
      <div class="aside-header">
        <i class="el-icon-arrow-right" @click="closeAside"></i>
      </div>
      <div class="aside-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'
import { mapState, mapActions } from 'vuex'

let vm
export default {
  data () {
    return {
      wsParams: {
        ws: '',
        lockReconnect: false,
        tt: ''
      },
      heartCheck: {
        timeOut: 5000,
        timeOutObj: null,
        serverTimeOutObj: null
      },
      toggle: false,
      isSetInfo: false,
      isSearching: false,
      isEmoji: false,
      myText: ' ',
      searchText: '',
      inText: '',
      emojiRight: {
        right: '260px'
      },
      roomData: {
        avatar: '',
        name: '',
        topic: '',
        describe: '',
        password: '',
        memberNum: 1
      },
      userData: {
        name: 'zhangsan'
      },
      currentUser: '',
      userInfo: ''
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    new_message: function (data) {
      alert('joinroom' + data)
    },
    join_room: function (data) {
      alert(data)
    },
    leave_room: function (data) {
      alert(data)
    }
  },
  computed: {
    ...mapState(['rooms', 'allMessages'])
  },
  methods: {
    ...mapActions(['getAllMessages']),
    infoSet () {
      this.isSetInfo = !this.isSetInfo
    },
    searchBtn () {
      this.isSearching = !this.isSearching
    },
    invite () {
      this.toggle = true
      this.$router.push({ path: '/home/chatSpace/share' })
      this.emojiRight.left = '70px'
      delete this.emojiRight.right
    },
    mute () {
      this.toggle = true
      this.isSetInfo = false
      this.$router.push({ path: '/home/chatSpace/setRoom' })
      this.emojiRight.left = '70px'
      delete this.emojiRight.right
    },
    Delete () {
      this.toggle = true
      this.isSetInfo = false
      this.emojiRight.left = '70px'
      delete this.emojiRight.right
    },
    hideAbsolute () {
      this.isSetInfo = false
      this.isEmoji = false
    },
    closeAside () {
      this.toggle = false
      this.$router.push({ path: '/home/chatSpace' })
      delete this.emojiRight.left
      this.emojiRight.right = '260px'
    },
    onInput (event) {

    },
    chemoji () {
      this.isEmoji = !this.isEmoji
    },
    selectEmoji (emoji) {
      // console.log(emoji)
      // console.log(emoji.data)
      this.inText = this.inText + emoji.data
      // let test = ' '
      // test = JSON.stringify(this.inText)
      // console.log(test)
    },
    try012 () {
      this.$store.dispatch('getAllMessages')
    },
    // scrollToBottom () {
    //   this.$nextTick(() => {
    //     const container = document.querySelector(' .body ')
    //     container.scrollTop = container.scrollHeight
    //   })
    // },
    scrollToDown () {
      // alert(1)
      // const { scrollTop, scrollLeft } = this.$refs.vs.getPosition()
      // console.loo(scrollTop, scrollLeft)
      // console.log('scrolldown')
      const con = {
        y: '100%'
      }
      this.$refs.vs.scrollTo(con, 500)
    },
    getRoomInfo () {
      const that = this
      console.log('getRoomInfo')
      this.$axios.get('/api/v1/room/' + window.localStorage.getItem('currentRoom'))
        .then(res => {
          console.log(res)
          that.roomData.avatar = res.data.data.avatar
          that.roomData.name = res.data.data.name
          that.roomData.topic = res.data.data.topic
          that.roomData.describe = res.data.data.introduce
          that.roomData.password = res.data.data.key
          that.roomData.memberNum = res.data.data.count_user
        }).catch(error => {
          console.log(error)
        })
    },
    submit () {
      // this.$socket.emit('new message', 1)
      const that = this
      this.$axios.post('/api/v1/messages/' + window.localStorage.getItem('currentRoom'), {
        type: 'text',
        content: that.inText
      })
        .then(res => {
          console.log(res)
          that.inText = ''
        }).catch(error => {
          console.log(error)
          that.inText = ''
        })
    },
    getUserInfo () {
      const that = this
      this.$axios.get('/api/v1/user')
        .then(res => {
          console.log(res)
          that.userInfo = res.data.data
        }).catch(error => {
          console.log(error)
        })
    },
    joinRoom () {
      const data = { id: '1', username: '2' }
      data.id = window.localStorage.getItem('currentRoom')
      data.username = this.userInfo.name
      const d = JSON.stringify(data)
      console.log('join_room')
      this.$socket.emit('join_room', d)
    }
  },
  watch: {
    $route: {
      handler: (val, oldVal) => {
        let hash = ' '
        hash = val.path
        if (hash === '/home/chatSpace/setRoom') {
          vm.toggle = true
        } else if (hash === '/home/chatSpace') {
          vm.toggle = false
        } else if (hash === '/home/chatSpace/share') {
          vm.toggle = true
        }
      },
      deep: true
    }
  },
  mounted () {
    vm = this
    this.joinRoom()
    this.getRoomInfo()
    this.currentUser = window.localStorage.getItem('currentUser')
    let hash = '1'
    hash = window.location.hash
    if (hash === '#/home/chatSpace') {
      vm.toggle = false
    } else {
      vm.toggle = true
    }
  },
  created () {
    this.$store.dispatch('getAllMessages')
  },
  components: {
    VEmojiPicker
  }
}
</script>

<style lang="less" scoped>
.tem {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.container {
  width: 100%;
  height: calc(100% - 10px);
  /*border: 2px solid black;*/
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
}
.main {
  height: 100%;
  border: 1px solid #f5f6fa;
  .header {
    position: relative;
    height: 55px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.infoShow {
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 0.5px solid rgba(240,240,240,0.96);
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
}
.textInfo-h {
  margin-left: 5px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    font-size: 11px;
    color: #b4b9bf;
  }
}
.headerSet {
  margin-right: 30px;
  img {
    width: 18px;
    height: 18px;
    padding: 0 15px;
    cursor: pointer;
  }
}
.setMune {
  display: none;
  width: 150px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #f5f6fa;
  border-radius: 20px;
  z-index: 2021;
  position: absolute;
  top: 45px;
  .tem;
  flex-direction: column;
  .dropdownMenu {
    cursor: pointer;
    padding: 0 20px;
    width: 100%;
    height: 50%;
    .tem;
    justify-content: space-around;
  }
  :hover {
    color: #308fff;
  }
}
.body {
  width: 100%;
  height: calc(100% - 150px);
  border-top: 1px solid #f5f6fa;
}
.scrollToDown{
  display: none;
}
.searchPane {
  position: absolute;
  height: 60px;
  // width: calc(100% - 75px);
  background-color: #fff;
  border-bottom: 0.5px solid #f5f6fa;
  z-index: 2020;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchContainer{
  .tem;
  flex-direction: row;
  justify-content: space-around;
  border: 0.5px solid #f5f6fa;
  border-radius: 4px;
  width: 80%;
  height: 40px;
  // padding: 0 10px;
  background-color: #edeef6;
  /*color: #b6bac2;*/
  i{
    cursor: pointer;
  }
}
.searchInput{
    outline: none;
    border: none;
    border-radius: 4px;
    width: 90%;
    height: 100%;
    // padding: 0 10px;
    background-color: #edeef6;
    color: #757575;
}
.vue-scroll{
  height:100%;
}
.chatSpace {
  height: 100%;
  width: 100%;
   /*background-color: skyblue;*/
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  /*position: absolute;*/
  bottom: 0px;
}
.chatText {
  background-color: #f5f6fa;
  /*font-size: 15px;*/
}
.chatAvatar {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 0.5px solid rgba(240,240,240,0.96);
  margin: 10px 10px;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
}
.myChat {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  right: 5px;
  word-break: break-all;
  max-width: 48%;
  min-width: 400px;
  margin: 10px 0;
  color: #e2efff;
  .chatText {
    background-color: #0176ff;
    color: #c1ddff;
    border-radius: 15px 15px 0;
    padding: 20px 10px;
    margin: 10px 0;
    height: auto;
    min-width: 100px;
    padding: 20px 15px;
    text-align: right;
    overflow: visible;
    text-align: left;
    font-size: 15px;
    .chatName {
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 8px;
      color: #fff;
    }
    .chatTime {
      font-size: 10px;
      color: #8dc1ff;
      padding-top: 8px;
    }
  }
}
.otherChat {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  right: 5px;
  word-break: break-all;
  max-width: 48%;
  min-width: 400px;
  margin: 10px 0;
  .chatText {
    background-color: #f5f6fa;
    color: #9c9ca7;
    border-radius: 15px 15px 15px 0;
    padding: 20px 10px;
    margin: 10px 0;
    height: auto;
    min-width: 100px;
    padding: 20px 15px;
    text-align: right;
    overflow: visible;
    text-align: left;
    font-size: 15px;
    .chatName {
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 8px;
      color: #575b68;
    }
    .chatTime {
      font-size: 10px;
      color: #bcbdc5;
      padding-top: 8px;
    }
  }
}
.footer {
  border-top: 1px solid #f5f6fa;
  height: 90px;
  margin: 0;
  padding: 0;
  .tem;
  justify-content: space-between;
  .chatHandle{
    height:100%;
    .tem;
    padding:20px;
    span,i{
      cursor: pointer;
      padding:10px;
      font-size:25px;
      color:#babbbc;
    }
    span:hover,.el-icon-paperclip:hover{
        color:grey;
    }
    .icon3{
      background-color: #0176ff;
      color:white;
      border-radius: 50%;
    }
    .icon3:hover{
      background-color: #308fff;
    }
  }
}
.chatInput{
  width:70%;
  height:100%;
  .tem;
  textarea{
    resize:none;
    outline: none;
    width:100%;
    height:70%;
    font-size: 15px;
    border:transparent;
    /*padding:20px*/
    margin:20px;
  }
}
.Emoji{
  position: absolute;
  /*transform: translate(0,-100%);*/
  right:260px;
  bottom: 400px;
}
#EmojiPicker{
  width:250px;
  height:300px;
}
.Raside {
  height: 100%;
  border: 1px solid #f5f6fa;
  .aside-header {
    width: 100%;
    height: 55px;
    i {
      position: relative;
      top: 20px;
      left: 20px;
      cursor: pointer;
    }
  }
  .aside-body {
    width: 100%;
    height: calc(100% - 55px);
    border-top: 1px solid #f5f6fa;
  }
}
.emoji{
  position: absolute;
  // top:-200px;
}
</style>
