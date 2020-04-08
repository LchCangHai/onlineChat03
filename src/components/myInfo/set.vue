<template>
  <div class="container">
    <vue-scroll>
      <div class="totle">
        <div class="header">
          <div class="title">Settings</div>
          <div class="content">Update your profile details</div>
        </div>
        <div class="setInfo">
          <div class="header1">
            <div class="info">
              <div class="title1">Account</div>
              <div class="content1">Update your profile details</div>
            </div>
            <span class="iconfont icon-icon_signal"></span>
          </div>
          <div class="myForm">
            <div class="Photo item">
              <span class="title2">Avatar</span>
              <div class="formElement">
                <div class="icon1">
                  <span class="iconfont icon-photo2"></span>
                </div>
                <div class="tip1">
                  You can upload jig, gif or png files. Max file size 3mb.
                </div>
              </div>
            </div>
            <div class="Name item">
              <span class="title2">Name</span>
              <div class="formElement">

              </div>
            </div>
            <div class="Phone item">
              <span class="title2">Phone</span>
              <div class="formElement">

              </div>
            </div>
            <div class="Email item">
              <span class="title2">Email</span>
              <div class="formElement">

              </div>
            </div>
            <div class="Confirm item">
              <button type="button" class="confirm">Save Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
export default {
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
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    .totle{
      .tem;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
    }
  }
  .header{
    .tem;
    align-items: flex-start;
    width:95%;
    height: 60px;
    border-bottom: #f5f6fa solid 1px;
    padding: 10px;
    .title{
      font-size:15px;
    }
    .content{
      font-size: 12px;
    }
  }
  .setInfo{
    .tem;
    width:70%;
    min-width:300px;
    max-width: 450px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #f5f6fa;
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .header1{
    width:100%;
    .tem;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    height: 100px;
  }
  .info{
    .tem;
    align-items: flex-start;
    width:95%;
    height: 60px;
    border-bottom: #f5f6fa solid 1px;
    padding: 10px;
    .title1{
      font-size:15px;
    }
    .content1{
      font-size: 12px;
    }
  }
  .myForm{
    /*background-color: #8dc1ff;*/
    .tem;
    width: 90%;
    /*padding: 0 10px;*/
    border-radius: 5px;
    .formElement{
      .tem;
      background-color: #edeef6;
      width: 100%;
      height: 45px;
      border-radius: 4px;
    }
  }
  .title2{
    align-self: flex-start;
    padding:10px 0;
    font-size: 13px;
    color: grey;
  }
  .item{
    width:100%;
    margin: 10px 0;
    .tem;
  }
  .Photo{
    .formElement{
      height:120px;
      .icon1{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-bottom: 5px;
        background-color: #0176ff;
        span {
          position: relative;
          left:12px;
          top:8px;
          border-radius: 50%;
          color:white;
        }
      }
      .tip1{
        /*width:50px;*/
        color:#b0b5bd;
        font-size:10px;
        text-align: center;
        max-width: 180px;
      }
    }
  }
  .confirm{
    background-color: #0176ff;
    color: white;
    width:70%;
    height:40px;
    border-radius: 8px;
    outline: none;
    border:none;
    font-size:15px;
    margin-top:10px;
    margin-bottom:20px;
  }
</style>
