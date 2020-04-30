<template>
  <div id="app">
    <div class="home"
    v-show="isHome">
      <el-container>
        <el-header>
          <div class="title">在线匿名聊天室</div>
        </el-header>
        <el-main>
<!--          Main-->
<!--          <el-button type="primary" @click="login">主要按钮</el-button>-->
          <div class="navs">
            <div class="toCreate navItem"
                :class="{ active: activeNum === 1 ? true : false}"
                 @click="tocreate"
            >
              <span>创建新房间</span>
              <i class="el-icon-plus"></i>
            </div>
            <div class="toJoin navItem"
                 :class="{ active: activeNum === 2 ? true : false}"
                 @click="tojoin"
            >
              <span>加入新房间</span>
              <i class="el-icon-chat-dot-square"></i>
            </div>
            <div class="toView navItem"
                 :class="{ active: activeNum === 3 ? true : false}"
                 @click="toview"
            >
              <span>已加入房间</span>
              <i class="el-icon-menu"></i>
            </div>
          </div>
          <div class="contentContainer">
            <div class="create contentItem"
                 v-show=" activeNum === 1 ? true : false"
            >
              <createComponent></createComponent>
            </div>
            <div class="join contentItem"
                 v-show=" activeNum === 2 ? true : false"
            >
              <div class="title1">
                输入房间号/id：
              </div>
              <div class="inCode">
                <input
                  placeholder="房间号/id"
                  v-model="roomCode"
                >
              </div>
              <div class="title1">
                输入房间邀请码：
              </div>
              <div class="inCode">
                <input
                  placeholder="邀请码"
                  v-model="inviteCode"
                >
              </div>
              <el-button
                type="primary"
                @click="addRoom"
              >加入</el-button>
              <div class="tip1">{{tip1}}</div>
<!--                        <el-button type="primary" @click="login">主要按钮</el-button>-->
            </div>
            <div class="view contentItem"
                 v-show=" activeNum === 3 ? true : false"
            >
              <div class="btnFresh"
                   @click="getMyRooms"
              >刷新<i class="el-icon-refresh"></i></div>
              <div class="list">
                <div
                  class="item1"
                  v-for="item in myRooms"
                  :key="item.id"
                >
                  <div>{{item.name}}</div>
                  <div>
                    <button
                      type="button"
                      class="enter"
                      @click="enterRoom(item)"
                    >进入</button>
                  </div>
                </div>
              </div>
<!--                        <el-button type="primary" @click="login">主要按钮</el-button>-->
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
    <div class="room"
    v-show="!isHome">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
function getUrl (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return 'null'
}
export default {
  name: 'app',
  roomID: getUrl('roomID')
}
</script>

<style lang="less" scoped>
  .tem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .home{
    height:100%;
  }
  .room{
    height:100%;
  }
  .el-container {
    height: 100%;
    width: 100%;
  }
  .el-header {
    .tem;
    background-color: rgba(1,118,255,0.78);
    color: white;
    font-size: 25px;
    border-bottom: #edeef6 solid 2px;
    .title {
      word-spacing: 20px;
    }
  }
  .el-main {
    .tem;
    background-color: #f5f6fa;
    padding:0;
    margin:0;
    overflow: hidden;
  }
  .navs{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:20%;
    height:100%;
    background-color: #f5f6fa;
    padding-top:10px;
    border:gray solid 1px;
  }
  .contentContainer{
    .tem;
    width:80%;
    height:100%;
    background-color: white;
    > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .create{
    width:100%;
    height:100%;
    /*overflow: scroll;*/
  }
  .navItem{
    .tem;
    cursor: pointer;
    justify-content: space-around;
    background-color: white;
    height: 60px;
    width:100%;
    border-bottom: 1px solid #f5f6fa;
  }
  .navItem:hover{
    color: #0176ff;
  }
  .navItem:active{
    color:blue;
  }
  .join{
    width:40%;
    min-width: 400px;
    height:50%;
    background-color: #f5f6fa;
    border-radius: 10px;
  }
  .title1{
    align-self: flex-start;
    color: black;
    font-size: 15px;
    margin-left: 25px;
    margin-bottom: 10px;
  }
  .inCode{
    width:90%;
    height: 50px;
    background-color: #edeef6;
    color: #c3c7ce;
    margin-bottom: 20px;
    input{
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: transparent;
      height:98%;
      width:95%;
      font-size: 20px;
    }
  }
  .tip1{
    align-self: flex-start;
    text-indent: 2em;
    font-size: 13px;
    color: crimson;
    margin: 10px;
  }
  .list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5f6fa;
    width:50%;
    min-width: 400px;
    padding: 30px 0;
    border-radius: 10px;
  }
  .item1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 90%;
    height: 55px;
    border-bottom: #f5f6fa solid 1px;
    padding: 0 5px;
    button{
      border:none;
      background-color: skyblue;
      width:50px;
      height:25px;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
    }
  }
  .room{
    height:100%;
    width:100%;
    /*background-color: #308fff;*/
  }
  .btnFresh{
    align-self: flex-end;
    justify-self: flex-start;
    cursor: pointer;
    margin-bottom: 5px;
  }
  .active{
    background-color: #edeef6;
  }
</style>

<script>
  import createComponent from './components/creatRoom'
  let vm
  function getHash() {
    let hash
    hash = window.location.hash
    console.log(hash)
    return hash
  }
  import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'app',
    data() {
      return {
        isHome: true,
        activeNum: 1,
        inviteCode: '',
        roomCode: '',
        tip1: '',
        myRoom: '',
        myRooms: []
      }
    },
    methods: {
      ...mapMutations(['setRoomID','setRooms']),
      tocreate() {
        // console.log(12)
        this.activeNum = 1
      },
      tojoin() {
        // console.log(13)
        this.activeNum = 2
      },
      toview() {
        // console.log(14)
        this.activeNum = 3
      },
      login() {
        console.log('login')
        this.$router.push({ path: '/home' })
      },
      enter(roomID) {
      },
      getToken() {
        console.log('gettoken')
        this.$axios.post('/token')
          .then(ref=>{
              // console.log(ref.data)
              window.localStorage.setItem('token',ref.data)
              console.log('获取并保存token')
          }).catch(error=>{
            console.log(error)
        })
      },
      getMyRooms () {
        const that = this
        console.log('getUser')
        this.$axios({
          method: 'get',
          url: '/api/v1/user'
        })
          .then(res => {
            console.log(res)
            that.myRooms = res.data.data.rooms
            that.rooms = res.data.data.rooms
            window.localStorage.setItem('currentUser', res.data.data.id)
          }).catch(error => {
          console.log(error)
        })
      },
      enterRoom (item) {
        console.log(item)
        this.myRoom = item
        console.log('进入房间' + item.name)
        window.localStorage.setItem('currentRoom', item.id)
        this.$router.push({ path: '/home' })
      },
      addRoom () {
        console.log('addRoom')
        const that = this
        this.$axios({
          method: 'put',
          url: '/api/v1/user',
          data: {
            action: 'join',
            key: that.inviteCode,
            name: that.roomCode
          }
        })
        .then(res => {
          console.log('加入房间:' + res.data.data.name)
          console.log(res.data)
          console.log('加入房间成功！马上跳转。。。')
          that.enterRoom(res.data.data)

        }).catch(error => {
          console.log('加入房间错误:' + error)
        })
      }
    },
    components: {
      createComponent
    },
    computed: {
      ...mapState(['currentRoomID'])
    },
    watch: {
      // activeNum: {
      //   handler
      // },
      $route: {
        handler: (val, oldVal) => {
          let hash = ' '
          hash = val.path
          if (hash == "/") {
            vm.isHome = true
          } else {
            vm.isHome = false
          }
          if (hash == "/creatRoom") {
            vm.activeItem = 1
          } else if (hash == "/chatSpace") {
            vm.activeItem = 2
          } else if (hash == "/Info") {
            vm.activeItem = 3
          }
        },
        deep: true,
        immediate: true
      },
      myRoom (val) {
        this.setRoomID(val)
      },
      myRooms (val) {
        this.setRooms(val)
      }
    },
    mounted: function () {
      let that = this
      this.getMyRooms()
      const mytoken = window.localStorage.getItem('token')
      if (mytoken == null) {
        that.getToken()
      } else {
        console.log('已保存token')
      }
      let hash = getHash()
      if (hash == "#/") {
        that.isHome = true
      } else {
        that.isHome = false
      }
      if (hash == "#/creatRoom") {
        that.activeItem = 1
      } else if (hash == "#/chatSpace") {
        that.activeItem = 2
      } else if (hash == "#/Info") {
        that.activeItem = 3
      }
      vm = this
    }
  }
</script>
