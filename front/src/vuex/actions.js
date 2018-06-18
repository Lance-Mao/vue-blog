import * as types from './mutation-types'
import axios from 'axios'

export default {
  //登录
  login({ commit }, data) {
    axios.post('/api/login', data)
      .then(response => {
        console.log(response, '返回结果')
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
        console.log(response)
        commit(types.USER_REGISTER, response.data)
      })
      .catch(error => {
        commit(types.USER_REGISTER_FAILURE, error)
      })
  },
  //发布文章
  submitArticle({ commit }, data) {
    console.log(data)
    axios.put('/api/submitArticle', data)
      .then(response => {
        console.log(response.data)
        commit(types.ARTICLE_POST, response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log("错误")
        console.log(error)
      })
  },
  //获取文章列表
  getArticleList({ commit }) {
    console.log(123456)
    axios.get('/api/getArticleList')
      .then(response => {
        commit(types.ARTICLE_GET, response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  //根据id获取指定文章列表
  getArticleById({ commit }, id) {
    axios.get('/api/getArticleById/' + id)
      .then(response => {
        console.log(response.data)
        commit(types.ARTICLE_LOADING, response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}