<template>
  <div class="container">
    <vue-scroll>
      <div class="totle">
        <div class="info">
          <div class="reinfo">
            <div class="avatar">
              <img :src="roomData.avatar">
            </div>
            <div class="briefIntro">
              <div class="title">{{roomData.name}}</div>
              <div class="link">{{roomData.topic}}</div>
            </div>
          </div>
          <div class="intro">{{roomData.describe}}</div>
        </div>
        <div class="qshare">
          <div class="select">
            <div class="item"
                 @click="shareInfo"
            >
              <div>QQ</div>
              <span class="iconfont icon-icon_qq_fill"></span>
            </div>
            <div class="item"
                 @click="shareInfo"
            >
              <div>WeChat</div>
              <span class="iconfont icon-icon_wechat"></span>
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roomData: {
        avatar: '',
        name: '',
        topic: '',
        describe: '',
        password: '',
        memberNum: 1,
        id: ''
      }
    }
  },
  methods: {
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
          that.roomData.id = res.data.data.id
        }).catch(error => {
          console.log(error)
        })
    },
    shareInfo () {
      const info = '分享这个房间\n房间名为：【' + this.roomData.name +
        '】\nid为：【' + this.roomData.id + '】\n邀请码为：【' + this.roomData.password +
        '】\n复制信息进行分享'
      alert(info)
    }
  },
  mounted () {
    const that = this
    that.getRoomInfo()
  }
}
</script>

<style lang="less" scoped>
  .tem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container{
    .tem;
    width:100%;
    height:100%;
  }
  .totle{
    .tem;
    width:100%;
    height:100%;
  }
  .info{
    .tem;
    justify-content: space-around;
    width:100%;
    height:250px;
    .reinfo{
      .tem;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .avatar{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #f5f6fa;
    margin-bottom:15px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .briefIntro{
    position: relative;
    top: -10px;
    margin: 5px;
    /*max-width: 250px;*/
    word-break: break-all;
    .title{
      font-size: 15px;
    }
    .link{
      font-size: 12px;
      color: #a3a4ad;
    }
  }
  .intro{
    font-size:18px;
    word-break: break-all;
    height:100px;
    margin: 0 13px;
    text-align: center;
    font-style: normal;
    max-width: 200px;
  }
  .qshare{
    width:100%;
    height:400px;
    background-color: #f5f6fa;
    .select{
      background-color: #ffffff;
      margin: 15px 5px;
      border-radius: 4px;
      .item{
        border-bottom: 1px solid #f5f6fa;
        height: 55px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        font-size:12px;
        color: #757f8a;
      }
    }
  }
  .item{
    cursor: pointer;
  }
  .item:hover{
    color:#0000ff;
    background-color: rgba(250,251,255,0.78);
  }
</style>
