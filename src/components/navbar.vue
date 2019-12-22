<template>
  <div class="navbar">
    <li>
      <ul class="navbar-list">
        <li class="navbar-list__item" v-for="(item,index) of itemList" :key="index">
          <a @click="$router.push(itemList[index].path)" >{{itemList[index].name}}</a></li>
      </ul>
    </li>
    <li class="navbar-search">
      <form action=""
            method="get"
            class="navbar-search__form">
        <input type="text"
               value=""
               placeholder="搜索DigAg"
               class="navbar-search__input">
        <img src="../assets/images/search-icon.svg"
             alt="搜素"
             srcset="">
      </form>
    </li>
    <li class="navbar-submit">
      <img src="../assets/images/submit-icon.svg"
           alt=""
           srcset="">
      <span>写文章</span>
    </li>
    <li class="navbar-auth" v-show="loginStatus==false">
      <div class="navbar-auth">
        <span class="navbar-auth__login" @click="handleAuth('login')">登录</span>
        <span class="navbar-auth__register" @click="handleAuth('register')">注册</span>
      </div>
    </li>
    <div v-show="loginStatus==true">
    <li class="nav-item notification" >
      <a class="app-link" href="/" target="_blank" rel="noopener noreferrer">
        <i class="icon ion-android-notifications"></i>
      </a>
    </li>
    <li class="nav-item" >
      <div class="lazy avatar avatar loaded immediate"  @click="showMore()">
        <img src="../assets/images/person.gif" height="40px" width="40px" alt="" />
      </div>
      <ul class="nav-menu" v-show="this.showTips">
        <div class="nav-menu-item-group">
          <li class="nav-menu-item">
            <span>your name:{{logName}}</span>
          </li>
        </div>
        <div class="nav-menu-item-group">
          <li class="nav-menu-item">
            <a href="" @click="log_out()"><span>登出</span></a>
          </li>
        </div>
      </ul>
    </li>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      showTips: false,
      itemList: [
        {
          name: '首页',
          path: '/timeline'
        }, {
          name: '专栏',
          path: '/column'
        },
        {
          name: '收藏夹',
          path: '/collect'
        }, {
          name: '发现',
          path: '/find'
        }, {
          name: '标签',
          path: '/label'
        }
      ]
    }
  },
  computed: mapState([
    'loginStatus', 'logId', 'logName'
  ]),
  methods: {
    ...mapActions(
      ['log_out', 'log_in', 'register']
    ),
    handleAuth (type) {
      this.$emit('auth', type)
    },
    showMore () {
      // console.log(this.showTips)
      this.showTips = !this.showTips
      // console.log(this.showTips)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/style/navbar.less";
@import "../assets/style/loginHeader.css";
</style>
