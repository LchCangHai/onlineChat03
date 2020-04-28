<template>
  <div class="container">
    <vue-scroll>
      <div class="showInfo">
        <div class="avatar">
          <img :src="avatar">
        </div>
        <div class="info">
          <div class="name">{{name}}</div>
          <div class="intro">{{describe}}</div>
        </div>
      </div>
      <div class="setInfo">
        <div class="myForm">
          <div class="Photo item">
            <input type="file"
                   ref="uploadAvatar_btn"
                   class="none"
                   @change="handelFileChange"/>
            <span class="title">Photo</span>
            <div class="formElement"
                 id="drag_box"
                 ref="dropbox"
                 :class="{borderhover: borderhover}">
              <div class="icon1"
                   @click="clickUpload"
                   id="icon1">
                <img class="obj"
                     id="obj"
                     v-show="isUpload"
                     :src="avatar"
                >
                <span class="iconfont icon-photo2"
                      v-show="!isUpload"
                ></span>
              </div>
              <div class="tip1"
                   @click="clickUpload">
                You can upload jig, gif or png files. Max file size 3mb.
              </div>
            </div>
          </div>
          <div class="Name item">
            <span class="title">Name</span>
            <div class="formElement">
              <input class="inputName inForm"
                     placeholder="Group Name"
                     v-model="name"
              /></div>
          </div>
          <div class="Topic item">
            <span class="title">Topic(optional)</span>
            <div class="formElement">
              <input class="inputTopic inForm"
                     placeholder="Group Topic"
                     v-model="topic"
              /></div>
          </div>
          <div class="Describe item">
            <span class="title">Describe</span>
            <div class="formElement">
              <textarea class="inputDescribe inForm"
                     placeholder="Group Describe"
                     v-model="describe"
              /></div>
          </div>
          <div class="Password item">
            <span class="title">Password(invite)</span>
            <div class="formElement">
              <input class="inputPassword inForm"
                     placeholder="Group Password"
                     v-model="password"
              /></div>
          </div>
          <div class="item">
<!--            <button-->
<!--              type="button"-->
<!--              class="confirm"-->
<!--              @click="btnSubmit"-->
<!--              :disabled="isMaster"-->
<!--            >确认修改</button>-->
            <el-button
              type="primary"
              class="confirm"
              @click="btnSubmit"
              :disabled="isMaster"
            >确认修改</el-button>
          </div>
        </div>
      </div>
    </vue-scroll>

  </div>
</template>

<script>
document.body.ondrop = function (event) {
  event.preventDefault()
  event.stopPropagation()
}
const tformdata = new FormData()
export default {
  data () {
    return {
      labelPosition: 'right',
      formdata: tformdata,
      borderhover: false,
      isUpload: false,
      isMaster: true,
      avatar: '',
      search: '',
      file: '',
      name: '',
      topic: '',
      describe: '',
      password: '',
      master_id: ''
    }
  },
  methods: {
    clickUpload () {
      this.$refs.uploadAvatar_btn.click()
    },
    enentDrop: function (e) {
      this.borderhover = false
      e.stopPropagation()
      e.preventDefault()
      const fileData = e.dataTransfer.files
      // console.log(fileData)
      this.uploadFile(fileData)
    },
    uploadFile: function (files) {
      if (files.length !== 1) {
        console.log('数量错误')
      } else {
        const file = files[0]
        this.file = file
        const img = document.getElementById('obj')
        img.src = window.URL.createObjectURL(file)
        img.onload = function () {
          window.URL.revokeObjectURL(this.src)
        }
        this.isUpload = true
        this.formdata = new FormData()
        this.formdata.set('avatar', file)
      }
    },
    handelFileChange () {
      const inputDOM = this.$refs.uploadAvatar_btn
      const files = inputDOM.files
      this.uploadFile(files)
    },
    getRoomInfo () {
      const that = this
      console.log('getRoomInfo')
      this.$axios.get('/api/v1/room/' + window.localStorage.getItem('currentRoom'))
        .then(res => {
          console.log(res)
          that.avatar = res.data.data.avatar
          that.name = res.data.data.name
          that.topic = res.data.data.topic
          that.describe = res.data.data.introduce
          that.password = res.data.data.key
          that.master_id = res.data.data.master_id
          if (that.master_id.toString() !== window.localStorage.getItem('currentUser').toString()) {
            // alert(that.master_id + window.localStorage.getItem('currentUser'))
            console.log('不是群主，不能修改信息')
            that.isMaster = true
          } else {
            console.log('是群主，能修改信息')
            that.isMaster = false
          }
        }).catch(error => {
          console.log(error)
        })
    },
    modifyRoom () {
      const that = this
      console.log('modifyRoom')
      this.$axios({
        method: 'put',
        url: '/api/v1/room/' + window.localStorage.getItem('currentRoom'),
        headers: { 'Content-Type': 'multipart/form-data' },
        data: that.formdata
      })
        .then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
    },
    modifyRoomAvatar () {
      const that = this
      console.log('modifyUserRoom')
      this.$axios({
        method: 'post',
        url: '/avatars/room/' + window.localStorage.getItem('currentRoom'),
        headers: { 'Content-Type': 'multipart/form-data' },
        data: that.formdata
      })
        .then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
    },
    btnSubmit () {
      console.log('submitModifyRoom')
      this.modifyRoom()
      this.modifyRoomAvatar()
    }
  },
  mounted: function () {
    const that = this
    this.getRoomInfo()
    const dropbox = document.getElementById('drag_box')
    dropbox.addEventListener('drop', this.enentDrop, false)
    dropbox.addEventListener('dragleave', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = false
    })
    dropbox.addEventListener('dragenter', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = true
    })
    dropbox.addEventListener('dragover', function (e) {
      e.stopPropagation()
      e.preventDefault()
      that.borderhover = true
    })
  },
  watch: {
    name (val) {
      this.formdata.set('name', val)
    },
    topic (val) {
      this.formdata.set('topic', val)
    },
    describe (val) {
      this.formdata.set('introduce', val)
    },
    password (val) {
      this.formdata.set('key', val)
    }
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
  .none{
    display: none;
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
    margin: 25px 0;
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
         object-fit: cover;
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
  .inForm{
    outline: none;
    border: none;
    width: 85%;
    height: 100%;
    background-color: #edeef6;
  }
  .title{
    align-self: flex-start;
    padding:10px 0;
    font-size: 13px;
    color: grey;
  }
  .Photo{
    .formElement{
      height: 90px;
      .icon1{
        .tem;
        cursor: pointer;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin: 5px;
        background-color: #0176ff;
        span {
          position: relative;
          /*left:7px;*/
          /*top:4px;*/
          border-radius: 50%;
          color:white;
        }
      }
      .tip1{
        cursor: pointer;
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
    cursor: pointer;
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
  .borderhover{
    border:1px dotted grey;
  }
  img.obj {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  textarea{
    resize: none;
    font-weight: 500;
    font-size: 15px;
  }
</style>
