export default {
  log_out ({commit}) {
    commit('logOut')
  },
  log_in ({commit, state}, obj) {
    var success = false
    for (var key in state.userSigned) {
      if (state.userSigned[key].id === obj.id) {
        if (state.userSigned[key].password === obj.PW) {
          success = true
          obj.name = state.userSigned[key].name
          commit('logIn', obj)
        } else {
          alert('密码错误')
        }
        return success
      }
    }
    if (success === false) {
      alert('宁还没有注册')
    }
    return success
  },
  register ({commit, state}, obj) {
    var success = true
    for (var key in state.userSigned) {
      if (state.userSigned[key].id === obj.id) {
        alert('该账号已被注册')
        success = false
        break
      }
      if (state.userSigned[key].name === obj.name) {
        alert('该昵称已被使用')
        success = false
        break
      }
    }
    if (success) {
      commit('Register', obj)
      commit('logIn', obj)
    }
  }
}
