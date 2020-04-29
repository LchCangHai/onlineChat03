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
              <input
                type="file"
                ref="uploadAvatar_btn"
                class="none"
                @change="handelFileChange"
              />
              <span class="title2">Avatar</span>
              <div
                class="formElement"
                id="drag_box"
                ref="dropbox"
                :class="{ borderhover: borderhover }"
              >
                <div class="icon1" @click="clickUpload" id="icon1">
                  <img
                    class="obj"
                    id="obj"
                    :src="userInfo.userAvatar"
                  />
                </div>
                <div class="tip1" @click="clickUpload">
                  You can upload jig, gif or png files. Max file size 3mb.
                </div>
              </div>
            </div>
            <div class="Name item">
              <span class="title2">Name</span>
              <div class="formElement">
                <input
                  class="inputName inForm"
                  placeholder="Type your name"
                  v-model="userInfo.name"
                />
              </div>
            </div>
            <div class="Phone item">
              <span class="title2">Phone</span>
              <div class="formElement">
                <input
                  class="inputPhone inForm"
                  placeholder="(123)456-7890"
                  v-model="userInfo.phone"
                />
              </div>
            </div>
            <div class="Email item">
              <span class="title2">Email</span>
              <div class="formElement">
                <input
                  class="inputEmail inForm"
                  placeholder="you@yoursite.com"
                  v-model="userInfo.email"
                />
              </div>
            </div>
            <div class="Country item">
              <span class="title2">Country</span>
              <div class="formElement">
                <input
                  class="inputEmail inForm"
                  placeholder="Your country"
                  v-model="userInfo.country"
                />
              </div>
            </div>
            <div class="Area item">
              <span class="title2">Area</span>
              <div class="formElement">
                <input
                  class="inputEmail inForm"
                  placeholder="Your area"
                  v-model="userInfo.area"
                />
              </div>
            </div>
            <div class="Confirm item">
              <button
                type="button"
                class="confirm"
                @click="btnSubmit"
              >Save Preferences</button>
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
document.body.ondrop = function (event) {
  event.preventDefault()
  event.stopPropagation()
}
const tformdata = new FormData()
export default {
  data () {
    return {
      formdata: tformdata,
      borderhover: false,
      isUpload: true,
      userInfo: {
        userAvatar: '',
        name: '',
        phone: '',
        email: '',
        country: '',
        area: ''
      },
      userData: '',
      file: ''
    }
  },
  methods: {
    ...mapMutations(['setRoomID', 'setRooms']),
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
    getUser () {
      console.log('getuser111111111111111')
      this.userInfo.userAvatar = this.currentUserInfo.avatar
      this.userInfo.name = this.currentUserInfo.username
      this.userInfo.phone = this.currentUserInfo.phone
      this.userInfo.email = this.currentUserInfo.email
      this.userInfo.country = this.currentUserInfo.country
      this.userInfo.area = this.currentUserInfo.area
      // this.$axios
      //   .get('/api/v1/user')
      //   .then(res => {
      //     console.log(res.data)
      //     that.userInfo.userAvatar = this.currentUserInfo.avatar
      //     that.userInfo.name = this.currentUserInfo.username
      //     that.userInfo.phone = this.currentUserInfo.phone
      //     that.userInfo.email = this.currentUserInfo.email
      //     that.userInfo.country = this.currentUserInfo.country
      //     that.userInfo.area = this.currentUserInfo.area
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    modifyUser () {
      const that = this
      console.log('modifyUser')
      this.$axios({
        method: 'put',
        url: '/api/v1/user',
        headers: { 'Content-Type': 'multipart/form-data' },
        data: that.formdata
      })
        .then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
    },
    modifyUserAvatar () {
      const that = this
      console.log('modifyUserAvatar')
      this.$axios({
        method: 'post',
        url: '/avatars/user/' + window.localStorage.getItem('currentUser'),
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
      console.log('submitModifyUser')
      this.modifyUser()
      this.modifyUserAvatar()
      this.$store.dispatch('getUserInfo')
    }
  },
  computed: {
    ...mapState(['currentRoomInfo', 'rooms', 'currentUserInfo'])
  },
  mounted: function () {
    const that = this
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
    userInfo (val) {
      this.formdata.set('username', val.name)
      this.formdata.set('phone', val.phone)
      this.formdata.set('email', val.email)
      this.formdata.set('country', val.country)
      this.formdata.set('area', val.area)
    }
  },
  created () {
    this.getUser()
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
.none {
  display: none;
}
.container {
  .tem;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  .totle {
    .tem;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }
}
.header {
  .tem;
  align-items: flex-start;
  width: 95%;
  height: 60px;
  border-bottom: #f5f6fa solid 1px;
  padding: 10px;
  .title {
    font-size: 15px;
  }
  .content {
    font-size: 12px;
  }
}
.setInfo {
  .tem;
  width: 70%;
  min-width: 300px;
  max-width: 600px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #f5f6fa;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.header1 {
  width: 100%;
  .tem;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  height: 100px;
}
.info {
  .tem;
  align-items: flex-start;
  width: 95%;
  height: 60px;
  border-bottom: #f5f6fa solid 1px;
  padding: 10px;
  .title1 {
    font-size: 15px;
  }
  .content1 {
    font-size: 12px;
  }
}
.myForm {
  /*background-color: #8dc1ff;*/
  .tem;
  width: 90%;
  /*padding: 0 10px;*/
  border-radius: 5px;
  .formElement {
    .tem;
    background-color: #edeef6;
    width: 100%;
    height: 45px;
    border-radius: 4px;
  }
}
.inForm {
  outline: none;
  border: none;
  width: 85%;
  height: 100%;
  background-color: #edeef6;
}
.title2 {
  align-self: flex-start;
  padding: 10px 0;
  font-size: 13px;
  color: grey;
}
.item {
  width: 100%;
  margin: 10px 0;
  .tem;
}
.Photo {
  .formElement {
    .tem;
    height: 120px;
    .icon1 {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-bottom: 5px;
      background-color: #0176ff;
      cursor: pointer;
      span {
        position: relative;
        left: 12px;
        top: 8px;
        border-radius: 50%;
        color: white;
      }
    }
    .tip1 {
      /*width:50px;*/
      cursor: pointer;
      color: #b0b5bd;
      font-size: 10px;
      text-align: center;
      max-width: 180px;
    }
  }
}
.confirm {
  cursor: pointer;
  background-color: #0176ff;
  color: white;
  width: 70%;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.borderhover {
  border: 1px dotted grey;
}
img.obj {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
