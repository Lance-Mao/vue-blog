import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

import user from './modules/user'
import postList from './modules/postList'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        user,
        postList
    }
})