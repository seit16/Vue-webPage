<template>
  <div class="login">
    <div class="login__wrap">
      <div class="login__container">
        <div class="clearfix">
          <div class="login__title">登陆</div>
          <div class="login__close" @click="handleClose">&Chi;</div>
        </div>
        <div class="login__input_group">
          <input type="text" placeholder="请填写手机号或邮箱" class="login__input" v-model="inputId">
          <input type="password" placeholder="请输入密码" class="login__input" v-model="inputPW">
        </div>
        <div class="login__submit" @click="handleLogIn()">登陆</div>
        <div class="login__tips">
          没有账号？
          <span class="login__tips__register">注册</span>
          <span class="login__tips__not-password">忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      inputId: '',
      inputPW: ''
    }
  },
  methods: {
    ...mapActions({
      log_in: 'log_in'
    }),
    handleClose () {
      this.$emit('close')
    },
    handleLogIn () {
      if (this.inputId === '' || this.inputPW === '') {
        alert('账号密码不能为空')
      } else {
        this.log_in({'id': this.inputId, 'PW': this.inputPW})
        // login successfully, shut down the login windows
        if (this.$store.state.loginStatus === true) {
          this.$emit('close')
        }
        // console.log(this.log_in({'id': this.inputId, 'PW': this.inputPW}))
      }
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/login.less';
</style>
