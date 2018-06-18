import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

import user from './modules/user'
import article from './modules/article'
import articleDetails from './modules/articleDetails'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        user,
        article,
        articleDetails
    }
})