import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
// eslint-disable-next-line no-unused-vars
// import ajax from '../config/ajax'
import actions from './action'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  loginStatus: false,
  logName: '',
  logId: '',
  logPsssword: '',
  userSigned: [{
    'name': '123',
    'id': '3333333',
    'password': '123'
  }, {
    'name': 'david',
    'id': '2222222',
    'password': 'long123'
  }, {
    'name': 'judy',
    'id': '1111111',
    'password': 'jpi651'
  }
  ]
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,

  plugins: [
    createPersistedState()
  ]
})

export default store
