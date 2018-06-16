import { USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGOUT, USER_REGISTER, USER_REGISTER_FAILURE } from '../mutation-types'

const state = {
    username: '',
    createdAt: '',
    isLogin: false,
    isRegister: false
}


const mutations = {
    [USER_LOGIN] (state, data) {
        state.username = data.username
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
    [USER_REGISTER] (state, data) {
        state.isRegister = true
    },
    [USER_REGISTER_FAILURE] (state, data) {
        state.isRegister = false
    }
}

export default {
    state,
    mutations
}