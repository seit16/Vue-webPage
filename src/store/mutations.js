const LOG_OUT = 'logOut'
const LOG_IN = 'logIn'
const REGISTER = 'Register'

const mutations = {
  [LOG_OUT] (state) {
    state.loginStatus = false
    state.logName = ''
    state.logId = ''
    state.logPsssword = ''
  },
  [LOG_IN] (state, obj) {
    state.loginStatus = true
    state.logName = obj.name
    state.logId = obj.id
    state.logPsssword = obj.PW
  },
  [REGISTER] (state, obj) {
    state.userSigned.push({
      'name': obj.name,
      'id': obj.id,
      'password': obj.PW
    })
  }
}

export default mutations
