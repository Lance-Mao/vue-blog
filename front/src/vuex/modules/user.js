import { USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGOUT, USER_REGISTER, USER_REGISTER_FAILURE } from '../mutation-types'

const state = {
    username: '',
    email: '',
    createdAt: '',
    isLogin: false
}


const mutations = {
    [USER_LOGIN] (state, data) {
        state.username = data.username
        state.email = data.email
        state.createdAt = data.createdAt
        state.isLogin = true
    },
    [USER_LOGIN_FAILURE] (state) {
        return state
    },
    [USER_LOGOUT] (state) {
        state.username = ''
        state.email = ''
        state.createdAt = ''
        state.isLogin = false
    },
}

export default {
    state,
    mutations
}