import * as types from './mutation-types'
import axios from 'axios'

export default {
  //登录
  login({ commit }, data) {
    axios.post('/api/login', data)
      .then(response => {
        commit(types.USER_LOGIN, response.data)
      })
      .catch(error => {
        commit(types.USER_LOGIN_FAILURE, error)
      })
  },
  //注册
  register({ commit }, data) {
    console.log(12346)
    axios.post('/api/register', data)
      .then(response => {
        // commit(types.USER_REGISTER, response.data)
      })
      .catch(error => {
        // commit(types.USER_REGISTER_FAILURE, error)
      })
  }
}