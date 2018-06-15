import * as types from './mutation-types'
import axios from 'axios'

export default {
    //登录
    login({ commit }, data) {
        axios.post('http://mlwohmo.leanapp.cn/api/login', data)
      .then(response => {
        commit(types.LOGIN_USER, response.data)
      })
      .catch(error => {
        commit(types.LOGIN_USER_FAILURE, error)
      })
    }
}