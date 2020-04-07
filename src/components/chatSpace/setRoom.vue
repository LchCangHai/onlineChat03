<template>
  <div class="container">
    <vue-scroll>
      <div class="showInfo">
        <div class="avatar">
          <img src="../../assets/image/6.png">
        </div>
        <div class="info">
          <div class="name">mennanqun</div>
          <div class="intro">mengnannzhuangxiu哈哈哈哈哈哈哈哈</div>
        </div>
      </div>
      <div class="setInfo">
        <div class="myForm">
          <div class="Photo item">
            <span class="title">Photo</span>
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
            <span class="title">Name</span>
            <div class="formElement"></div>
          </div>
          <div class="Topic item">
            <span class="title">Topic(optional)</span>
            <div class="formElement"></div>
          </div>
          <div class="Describe item">
            <span class="title">Describe</span>
            <div class="formElement"></div>
          </div>
          <div class="item">
            <button type="button" class="confirm">确认修改</button>
            <!--          <el-button type="primary">主要按钮</el-button>-->
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
      labelPosition: 'right',
      formLabelAlign: {
        photo: '',
        name: '',
        type: '',
        describe: ''
      }
    }
  },
  methods: {

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
    width: 100%;
    height:100%;
    .tem;
  }
  .showInfo{
    .tem;
    height:33%;
    text-align: center;
    .avatar{
       height: 75px;
       width: 75px;
       border-radius: 50%;
       border: 2px solid #f5f6fa;
       margin-bottom:15px;
       img {
         height: 75px;
         width: 75px;
         border-radius: 50%;
       }
     }
    .info{
      font-size:15px;
      padding: 0 10px;
      .name{
        font-weight: bold;
        color:#3e4250;
      }
      .intro{
        margin-top:8px;
        font-size:13px;
        color:#c0c4ca;
        max-width: 180px;
      }
    }
  }
  .setInfo{
    height: 64%;
    width:100%;
    background-color:#f5f6fa ;
    border-radius: 4px;
  }
  .myForm{
    .tem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title{
      color: #a3a3ad;
    }
    .formElement{
      .tem;
      color: #b4bac1;
      background-color: #edeef6;
      width: 90%;
      height: 45px;
    }
  }
  .Photo{
    .formElement{
      height: 90px;
      .icon1{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin: 5px;
        background-color: #0176ff;
        span {
          position: relative;
          left:7px;
          top:4px;
          border-radius: 50%;
          color:white;
        }
      }
      .tip1{
        color:#c8ccd4;
        font-size:10px;
        text-align: center;
        max-width: 180px;
      }
    }
  }
  .Describe{
    .formElement{
      height:150px;
    }
  }
  .item{
    .tem;
  }
  .title{
    align-self: flex-start;
    padding:10px 20px;
    font-size: 13px;
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
