<template>
  <div class="container">
    <div class="main" :style="{width: toggle == true ? '75%' : '100%'}">
      <div class="header">
        <div class="infoShow">
          <div class="avatar">
            <img :src="avatarURL" />
          </div>
          <div class="textInfo-h">
            <strong>{{roomData.name}}</strong>
            <span>{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</span>
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
          @scrollToDown="scrollToDown"
        ></button>
        <vue-scroll ref="vs">
          <div
            class="searchPane"
            v-show="isSearching"
            :style="{width: toggle == true ? 'calc(75% - 58px)' : 'calc(100% - 75px)'}"
          >
            <input class="searchInput" v-model="searchText" />
          </div>
          <div class="chatSpace">
            <div class="myChat">
              <div class="chatText">
                <div class="chatName">11mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
              <div class="chatAvatar">
                <img src="../assets/image/vue.png" />
              </div>
            </div>
            <div class="otherChat">
              <div class="chatAvatar">
                <img src="../assets/image/logo.png" />
              </div>
              <div class="chatText">
                <div class="chatName">mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
            </div>
            <div class="myChat">
              <div class="chatText">
                <div class="chatName">222mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
              <div class="chatAvatar">
                <img src="../assets/image/vue.png" />
              </div>
            </div>
            <div class="otherChat">
              <div class="chatAvatar">
                <img src="../assets/image/logo.png" />
              </div>
              <div class="chatText">
                <div class="chatName">mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
            </div>
            <div class="myChat">
              <div class="chatText">
                <div class="chatName">3333mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
              <div class="chatAvatar">
                <img src="../assets/image/vue.png" />
              </div>
            </div>
            <div class="otherChat">
              <div class="chatAvatar">
                <img src="../assets/image/logo.png" />
              </div>
              <div class="chatText">
                <div class="chatName">mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
            </div>
            <div class="myChat">
              <div class="chatText">
                <div class="chatName">4444mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
              <div class="chatAvatar">
                <img src="../assets/image/vue.png" />
              </div>
            </div>
            <div class="otherChat">
              <div class="chatAvatar">
                <img src="../assets/image/logo.png" />
              </div>
              <div class="chatText">
                <div class="chatName">mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
            </div>
            <div class="myChat">
              <div class="chatText">
                <div class="chatName">5555mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
              </div>
              <div class="chatAvatar">
                <img src="../assets/image/vue.png" />
              </div>
            </div>
            <div class="otherChat">
              <div class="chatAvatar">
                <img src="../assets/image/logo.png" />
              </div>
              <div class="chatText">
                <div class="chatName">mennanzhizhu</div>
                dsaghtrytjssaghtrytjhgfdsfgggggggggasaghtrytjhgfdsfgggggggggghtrytjhgfdsfgggggggggsaghtrytjhgfdsfggggggggghgfdsfgggggggggg"}}
                <div class="chatTime">{{roomData.memberNum + 'member(s)' + '-' + roomData.info}}</div>
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
        >
        </textarea>
      </div>
      <div class="chatHandle">
        <span class="iconfont icon-smile"
              @click="chemoji"
        >
        </span>
        <i class="el-icon-paperclip"></i>
        <i class="icon3 el-icon-s-promotion"></i>
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

// const container = document.querySelector(' .body ')
// container.scrollTop = container.scrollHeight
// import packData from 'v-emoji-picker/data/emojis.json'
export default {
  data () {
    return {
      toggle: false,
      isSetInfo: false,
      isSearching: false,
      isEmoji: false,
      avatarURL: require('../assets/image/vue.png'),
      myText: ' ',
      searchText: 'Search this chat',
      inText: '',
      emojiRight: {
        right: '260px'
      },
      roomData: {
        name: 'mennan',
        memberNum: 15,
        info: 'mennannvzhuang'
      },
      userData: {
        name: 'zhangsan'
      }
    }
  },
  methods: {
    infoSet () {
      this.isSetInfo = !this.isSetInfo
    },
    searchBtn () {
      this.isSearching = !this.isSearching
    },
    invite () {
      this.toggle = true
      this.$router.push({ path: '/share' })
      this.emojiRight.left = '70px'
      delete this.emojiRight.right
    },
    mute () {
      this.toggle = true
      this.isSetInfo = false
      this.$router.push({ path: '/setRoom' })
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
      this.$router.push({ path: '/chatSpace' })
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
      console.log(emoji.data)
      this.inText = this.inText + emoji.data
    },
    scrollToBottom () {
      this.$nextTick(() => {
        const container = document.querySelector(' .body ')
        container.scrollTop = container.scrollHeight
      })
    },
    scrollToDown () {
      alert(1)
      const con = {
        y: '100%'
      }
      this.$refs.vs.scrollTo(con, 2)
    }
  },
  mounted () {
    this.$emit('scrollToDown')
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
  z-index: 2020;
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
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    outline: none;
    border: 0.5px solid #f5f6fa;
    border-radius: 4px;
    width: 80%;
    height: 40px;
    // padding: 0 10px;
    background-color: #edeef6;
    color: #b6bac2;
  }
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
  flex-flow: column-reverse nowrap;
  align-items: flex-start;
  /*position: absolute;*/
  bottom: 0px;
}
.chatText {
  background-color: #f5f6fa;
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
  }
}
.myChat {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
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
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 8px;
      color: #fff;
    }
    .chatTime {
      font-size: 12px;
      color: #8dc1ff;
      padding-top: 8px;
    }
  }
}
.otherChat {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
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
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 8px;
      color: #575b68;
    }
    .chatTime {
      font-size: 12px;
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
