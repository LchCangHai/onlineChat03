<template>
  <vue-scroll>
    <div class="container">
      <div class="title1">
        Profile
        <div
          class="btnFresh"
          @click="getUsers">
          <i class="el-icon-refresh"></i>
        </div>
      </div>
      <div class="search">
        <input
          class="inSearch"
          placeholder="通过昵称进行搜索..."
          v-model="searchContent"
          @keyup.enter="btnSearch"
        >
        <i
          class="el-icon-search"
           @click="btnSearch"
        ></i>
      </div>
      <div
        class="member"
        v-for="data in datas"
        :key="data.id"
      >
        <div class="info">
          <div class="avatar">
            <img
              :src="data.avatar"
            >
          </div>
          <div class="title">{{data.username}}</div>
          <div class="intro">{{data.create_at}}</div>
        </div>
        <div class="pane">
          <div class="item">
            <div class="title2">Conntry</div>
            <div class="content2">{{data.country}}</div>
          </div>
          <div class="item">
            <div class="title2">Area</div>
            <div class="content2">{{data.area}}</div>
          </div>
        </div>
      </div>
    </div>
  </vue-scroll>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      name: '',
      datas: {},
      datas1: '',
      searchContent: '',
      searchData: ''
    }
  },
  methods: {
    ...mapMutations(['setRoomID', 'setRooms']),
    getUsers () {
      const that = this
      console.log('getUsers')
      this.$axios.get('/api/v1/users', {
        params: {
          room: that.currentRoomInfo.id
        }
      })
        .then(res => {
          console.log(res)
          that.datas = res.data.data.users
          that.datas1 = res.data.data.users
          console.log('获取列表成功')
        }).catch(error => {
          console.log(error)
        })
    },
    btnSearch () {
      const that = this
      console.log(this.datas)
      console.log('搜索用户名：' + that.searchContent)
      this.search()
    },
    search () {
      const data = this.searchContent
      if (data) {
        this.searchData = this.datas.filter(function (product) {
          return String(product.username).toLowerCase().indexOf(data) > -1
        })
        console.log('搜索成功')
        this.datas = this.searchData
      } else {
        this.datas = this.datas1
      }
    }
  },
  computed: {
    ...mapState(['currentRoom', 'rooms', 'currentRoomInfo'])
  },
  mounted () {
    console.log('获取用户列表')
    this.getUsers()
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .search{
    .tem;
    border-radius: 5px;
    flex-direction: row;
    width:90%;
    height:45px;
    background-color: #edeef6;
    margin:10px 0;
    i{
      cursor: pointer;
    }
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
    padding: 10px 0;
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
      object-fit: cover;
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
  .btnFresh{
    margin-left: 5px;
    cursor: pointer;
  }
  /*.info1{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  justify-content: center;*/
  /*  align-items: flex-start;*/
  /*}*/

</style>
