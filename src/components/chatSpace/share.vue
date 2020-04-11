<template>
  <div class="container">
    <vue-scroll>
      <div class="totle">
        <div class="info">
          <div class="reinfo">
            <div class="avatar">
              <img src="../../assets/image/6.png">
            </div>
            <div class="briefIntro">
              <div class="title">mennannvzhuang</div>
              <div class="link">zheshiyigelianjgfgsgfdggfsgs</div>
            </div>
          </div>
          <div class="intro">zhelishijieshao这里是介绍zhelishijieshao这里是介绍zhelishijieshao这里是介绍</div>
        </div>
        <div class="qshare">
          <div class="select">
            <div class="item">
              <div>QQ</div>
              <span class="iconfont icon-icon_qq_fill"></span>
            </div>
            <div class="item">
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
</style>
