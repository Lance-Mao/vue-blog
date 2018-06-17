import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/components/HelloWorld'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Register from '@/views/Register'
import Post from '@/views/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
    ,{
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,{
      path: '/register',
      name: 'Register',
      component: Register
    }
    ,{
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
