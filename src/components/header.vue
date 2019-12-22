<template>
  <div class="agheader">
    <div class="header_container">
      <img src="../assets/images/logo.svg" class="header_logo_img" alt="logo" srcset=""/>
    </div>
    <div class="header__nav">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="less">
  @import "../assets/style/header.less";
</style>
