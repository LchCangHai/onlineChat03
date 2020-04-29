<template>
  <div id="home">
    <el-container>
      <el-aside width="70px"
                @click="btnSetOut"
      >
        <div class="logo">
          <img src="../assets/image/logo.png" />
        </div>
        <div class="functions">
          <i
            class="el-icon-edit-outline"
            :class="{active : (activeItem === 1 ? true : false)}"
            @click="toCreatRoom"
          ></i>
          <div>
            <i
              class="el-icon-chat-square"
              :class="{active : (activeItem === 2 ? true : false)}"
              @click="toChatSpace"
            ></i>
            <span class="chatInfo blink">.</span>
          </div>
          <i
            class="el-icon-user"
            :class="{active : (activeItem == 3 ? true : false)}"
            @click="toMyInfo"
          ></i>
        </div>
        <div class="setting"
             @mouseover="btnSet"
        >
          <i class="el-icon-setting"></i>
          <div
            class="settingItem"
            v-show="isSetting"
            @mouseout="btnSetOut"
          >
            <div class="seti"
                 @click="toHome"
            ><span>主页</span></div>
            <div class="seti"
                 @click="signOut"
            ><span>注销</span></div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
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
  .temp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  #home{
    height: 100%;
    width:100%;
  }
  .el-container {
    height: 100%;
    padding: 0;
    /*background-color: #308fff;*/
  }
  .el-aside {
    height: 100%;
    background-color: white;
    border: 2px solid #f5f6fa;
    .temp;
  }
  .el-main {
    height: 100%;
    width: calc(100% - 76px);
    padding: 0;
  }
  .functions {
    height: 120px;
    .temp;
    > div {
      padding-top: 10px;
      .temp;
      span {
        position: relative;
        margin-top: 0;
        font-weight: 900;
        top: -10px;
      }
    }
  }
  .setting {
    height: 50px;
  }
  .settingItem{
    .temp;
    z-index: 2021;
    /*display: none;*/
    justify-content: space-around;
    position: absolute;
    /*top:-100px;*/
    bottom: 30px;
    left: 50px;
    width:100px;
    height: 70px;
    background-color: white;
    border:black solid 1px;
    border-radius: 5px;
    > div{
      .temp;
      /*background-color: white;*/
      cursor: pointer;
      width:100%;
      height:50%;
      justify-content: center;
      border-bottom: #9c9ca7 solid 1px;
    }
  }
  .seti:hover{
    color: #308fff;
  }
  i[class^='el-icon'] {
    cursor: pointer;
  }
  .blink{
    color: blue;
    animation: blink 1s linear infinite;
    /* 其它浏览器兼容性前缀 */
    -webkit-animation: blink 1s linear infinite;
    -moz-animation: blink 1s linear infinite;
    -ms-animation: blink 1s linear infinite;
    -o-animation: blink 1s linear infinite;
  }
  .active {
    color: #308fff;
    font-weight: bolder;
  }
  @-webkit-keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 1; }
    50.01% { opacity: 0; }
    100% { opacity: 0; }
  }
</style>
<script>
  let vm
  function getHash() {
    let hash
    hash = window.location.hash
    console.log(hash)
    return hash
  }
  export default {
    name: 'app',
    data() {
      return {
        isCollapse: true,
        isSetting: false,
        activeItem: 2
      }
    },
    methods: {
      toCreatRoom() {
        this.activeItem = 1
        this.$router.push({ path: '/home/creatRoom' })
      },
      toChatSpace() {
        this.activeItem = 2
        this.$router.push({ path: '/home/chatSpace' })
      },
      toMyInfo() {
        this.activeItem = 3
        this.$router.push({ path: '/home/myInfo/Info' })
      },
      btnSet() {
        // console.log("set")
        this.isSetting = true
      },
      btnSetOut() {
        this.isSetting = false
      },
      toHome() {
        console.log("回到主页")
        this.$router.push({ path: '/' })
      },
      signOut() {
        console.log("注销账号")
        this.$router.push({ path: '/' })
      }
    },
    watch: {
      $route: {
        handler: (val, oldVal) => {
          let hash = ' '
          hash = val.path
          if (hash == "/home/creatRoom") {
            vm.activeItem = 1
          } else if (hash == "/home/chatSpace" ||
            hash == "/home/chatSpace/setRoom" || hash == "/home/chatSpace/share") {
            vm.activeItem = 2
          } else if (hash == "/home/myInfo/Info") {
            vm.activeItem = 3
          }
        },
        deep: true
      }
    },
    mounted: function () {
      let hash = getHash()
      let that = this
      if (hash == "#/home/creatRoom") {
        that.activeItem = 1
      } else if (hash == "#/home/chatSpace/setRoom" || hash == "#/home/chatSpace/share") {
        that.activeItem = 2
      } else if (hash == "#/home/myInfo/Info") {
        that.activeItem = 3
      }
      vm = this
    },
    created () {
      this.$store.dispatch('getRoomInfo')
      this.$store.dispatch('getUserInfo')
    }
  }
</script>
