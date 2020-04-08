<template>
  <div class="container">
    <vue-scroll>
      <div class="totle">
        <div class="title">
          Creat group
        </div>
        <div class="search">
          <div>
            <input class="search1"
                   placeholder="Search for messages or users..."
                    v-model="search"
            >
            <i class="el-icon-search"></i>
          </div>
        </div>
        <div class="creatForm">
          <div class="Photo item ">
            <input type="file"
                   ref="uploadAvatar_btn"
                   class="none"
                    @change="handelFileChange"/>
            <span class="title2">Photo</span>
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
            <span class="title2">Name</span>
            <div class="formElement">
              <input class="inputName inForm"
                     placeholder="Group Name"
                      v-model="name"
              />
            </div>
          </div>
          <div class="Phone item">
            <span class="title2">Topic(optional)</span>
            <div class="formElement">
              <input class="inputTopic inForm"
                     placeholder="Group Topic"
                     v-model="topic"
              />
            </div>
          </div>
          <div class="Email item">
            <span class="title2">Description</span>
            <div class="formElement">
              <input class="inputDescribe inForm"
                     placeholder="Group Describe"
                     v-model="describe"
              />
            </div>
          </div>
          <div class="Confirm item">
            <button type="button" class="confirm">Creat group</button>
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
      formdata: tformdata,
      borderhover: false,
      isUpload: false,
      search: '',
      file: '',
      name: '',
      topic: '',
      describe: ''
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
    }
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
    name (val) {
      this.formdata.set('name', val)
    },
    topic (val) {
      this.formdata.set('topic', val)
    },
    describe (val) {
      this.formdata.set('describe', val)
    }
  }
}
</script>

<style lang="less" scoped>
  .tem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .none{
    display: none;
  }
  .container{
    width:100%;
    height: 100%;
    background-color: #f5f6fa;
  }
  .totle{
    .tem;
    width:100%;
    height: 100%;
  }
  input{
    font-size: 13px
  }
  .title{
    align-self: flex-start;
    margin: 20px 50px;
    font-size: 25px;
    font-weight: bold;
  }
  .search{
    width: 100%;
    height:45px;
    div{
      .tem;
      flex-direction: row;
      margin: 0 50px;
      height: 100%;
      background-color: #edeef6;
      border-radius: 5px;
    }
    i{
      cursor: pointer;
    }
    i:hover{
      color: grey;
    }
  }
  .search1{
    outline: none;
    border: none;
    background-color: transparent;
    width:90%;
    height:40px;
  }
  .creatForm{
    .tem;
    width:90%;
    .formElement{
      .tem;
      background-color: #edeef6;
      width: 100%;
      min-width: 200px;
      max-width: 500px;
      height: 50px;
      border-radius: 4px;
    }
  }
  .inForm{
    outline: none;
    border: none;
    width: 85%;
    height: 100%;
    background-color: #edeef6;
  }
  .title2{
    align-self: flex-start;
    padding:10px 0;
    font-size: 13px;
    color: grey;
  }
  .item{
    width: 70%;
    min-width: 200px;
    max-width: 500px;
    margin: 5px 0;
    .tem;
  }
  .Photo{
    .formElement{
      .tem;
      height:120px;
      .icon1{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-bottom: 5px;
        background-color: #0176ff;
        cursor: pointer;
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
        cursor: pointer;
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
    max-width: 300px;
    height:40px;
    border-radius: 8px;
    outline: none;
    border:none;
    font-size:15px;
    margin-top:20px;
    margin-bottom:20px;
  }
  .borderhover{
    border:1px dotted grey;
  }
  img.obj{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
