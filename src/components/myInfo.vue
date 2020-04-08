<template>
  <div class="container">
    <div class="one">
      <router-view class="view one2" name="profile"></router-view>
    </div>
    <div class="two">
      <router-view class="view two2" name="settings"></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-self: center;
    align-items: center;
  }
  .one{
    height: 100%;
    width: 30%;
    background-color: #f5f6fa;
  }
  .two{
    height: 100%;
    width:70%;
  }
</style>
