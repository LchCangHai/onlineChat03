<template>
  <vue-scroll>
    <div class="container">
      <div class="title1">Profile</div>
      <div class="search">
        <input class="inSearch" placeholder="Search for message or username...">
        <i class="el-icon-search"></i>
      </div>
      <div class="member">
        <div class="info">
          <div class="avatar">
            <img src="../../assets/image/6.png">
          </div>
          <div class="title">damennan</div>
          <div class="intro">i am damennan ohadsguagjhguenvfuaehfaefajsidfuaefe</div>
        </div>
        <div class="pane">
<!--          <div class="item">-->
<!--            <div class="info1">-->
<!--              <div class="title2">Conntry</div>-->
<!--              <div class="content2">FuZhou FuJian</div>-->
<!--            </div>-->
<!--            <i class="el-icon-search"></i>-->
<!--          </div>-->
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
        </div>
        <div class="info">
          <div class="avatar">
            <img src="../../assets/image/6.png">
          </div>
          <div class="title">damennan</div>
          <div class="intro">i am damennan ohadsguagjhguenvfuaehfaefajsidfuaefe</div>
        </div>
        <div class="pane">
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
        </div>
        <div class="info">
          <div class="avatar">
            <img src="../../assets/image/6.png">
          </div>
          <div class="title">damennan</div>
          <div class="intro">i am damennan ohadsguagjhguenvfuaehfaefajsidfuaefe</div>
        </div>
        <div class="pane">
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
        </div>
        <div class="info">
          <div class="avatar">
            <img src="../../assets/image/6.png">
          </div>
          <div class="title">damennan</div>
          <div class="intro">i am damennan ohadsguagjhguenvfuaehfaefajsidfuaefe</div>
        </div>
        <div class="pane">
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">FuZhou FuJian</div>
          </div>
        </div>
      </div>

    </div>
  </vue-scroll>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      data: ''
    }
  },
  methods: {
    getData () {
      console.log('getData')
      this.$axios({
        method: 'get',
        url: '/api/v1/user'
      })
        .then(function (ret) {
          console.log('ret')
          alert('出来了')
        })
        .catch(function () {
          console.log('error')
        })
    }
  },
  mounted () {
    // alert('getData()')
    this.getData()
  }
}
</script>

<style lang="less" scoped>
  .tem{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container{
    height:100%;
    width:100%;
    .tem;
  }
  .title1{
    font-size: 20px;
    font-weight: bolder;
    align-self: flex-start;
    margin: 12px 10px;
  }
  .search{
    .tem;
    border-radius: 5px;
    flex-direction: row;
    width:90%;
    height:45px;
    background-color: #edeef6;
    margin:10px 0;
  }
  .member{
    .tem;
    width:100%;
  }
  .info{
    .tem;
    border-radius: 5px;
    width:90%;
    /*height:200px;*/
    background-color: #ffffff;
    margin:10px 0;
  }
  .pane{
    border-radius: 5px;
    width:90%;
    /*height: 700px;*/
    background-color: #ffffff;
    margin:10px 0;
    padding: 10px 0;
  }
  .inSearch{
    outline: none;
    border:none;
    width: 80%;
    height: 30px;
    background-color: #edeef6;
    color: #b4b9c1;
    font-size:12px;
  }
  .avatar{
    position: relative;
    top:-5px;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: 0.5px solid rgba(240,240,240,0.96);
    margin: 10px 10px;
    img {
      height: 75px;
      width: 75px;
      border-radius: 50%;
    }
  }
  .title{
    font-size: 15px;
    font-weight: bold;
    color: #252a3a;
  }
  .intro{
    font-size:12px;
    word-break: break-all;
    text-align: center;
    color: #b4b9bf;
    width: 80%;
    max-width: 200px;
    margin: 3px 0;
  }
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 70px;
    border-bottom: #f5f6fa solid 1px;
    margin: 0 15px;
    .title2{
      font-size:12px;
      color: lightgrey;
      font-weight: 500;
    }
    .content2{
      font-size:13px;
      color: darkgrey;
      font-weight: 600;
      margin: 3px 0;
    }
  }
  /*.info1{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  justify-content: center;*/
  /*  align-items: flex-start;*/
  /*}*/

</style>
