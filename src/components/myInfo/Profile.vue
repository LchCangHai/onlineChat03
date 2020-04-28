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
        v-for="data in datas.data.users"
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
      datas: {
        data: {
          count: 1, // # 用户数据个数(即users中的用户个数)
          kind: 'UserList', // # 资源类型
          self: 'http://chatroom.mr-lin.site/api/v1/users/?room=1', // # 该资源请求链接
          users: [ // # 用户信息
            {
              avatar: 'http://chatroom.mr-lin.site/avatars/user/25',
              create_at: '2020-04-25 11:45:36.129983',
              id: 25,
              kind: 'user_all',
              self: 'http://chatroom.mr-lin.site/api/v1/user/',
              update_at: '2020-04-25 11:45:36.129983',
              username: '3927'
            },
            {
              avatar: 'http://chatroom.mr-lin.site/avatars/user/9',
              create_at: '2020-04-26 11:45:36.222222',
              id: 25,
              kind: 'User',
              self: 'http://chatroom.mr-lin.site/api/v1/user/',
              update_at: '2020-04-25 11:45:36.129983',
              username: 'damennan'
            }
          ]
        },
        message: 'succeed',
        status: 200
      },
      datas1: '',
      searchContent: ''
    }
  },
  methods: {
    ...mapMutations(['setRoomID', 'setRooms']),
    getUsers () {
      const that = this
      console.log('getUsers')
      this.$axios.get('/api/v1/users', {
        params: {
          room: that.currentRoomID.id
        }
      })
        .then(res => {
          console.log(res)
          that.datas = res.data
          console.log('获取列表成功')
        }).catch(error => {
          console.log(error)
        })
    },
    btnSearch () {
      const that = this
      console.log('搜索用户名：' + that.searchContent)
    }
  },
  computed: {
    ...mapState(['currentRoomID', 'rooms'])
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
