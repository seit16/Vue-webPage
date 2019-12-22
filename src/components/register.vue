<template>
  <div class="register">
    <div class="register__wrap">
      <div class="register__container">
        <div class="clearfix">
          <div class="register__title">注册</div>
          <div class="register__close" @click="handleClose">&Chi;</div>
        </div>
        <div class="register__input_group">
          <input type="text" placeholder="请输入用户名" class="register__input" v-model="inName">
          <input type="text" placeholder="请填写手机号或邮箱" class="register__input" v-model="inId">
          <input type="password" placeholder="请输入密码" class="register__input" v-model="inPW">
        </div>
        <div class="register__submit" @click="handleRegister()">注册</div>
        <div class="register__login">
          <span>已有账号登陆</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      inName: '',
      inId: '',
      inPW: ''
    }
  },
  methods: {
    ...mapActions(
      ['register']
    ),
    handleClose () {
      this.$emit('close')
    },
    handleRegister () {
      if (this.inName === '' || this.inId === '' || this.inPW === '') {
        alert('昵称账号密码不能为空')
      } else {
        this.register(
          {'name': this.inName, 'id': this.inId, 'PW': this.inPW}
        )
        if (this.$store.state.loginStatus === true) {
          this.$emit('close')
        }
      }
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
@import '../assets/style/register.less';
</style>
