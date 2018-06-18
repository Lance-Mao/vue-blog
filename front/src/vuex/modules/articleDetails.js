import { ARTICLE_LOADING } from '../mutation-types'

const state = {
    objectId: "",
    title: "",
    content: "",
    author: "",
    createdAt: "",
    loading: false
}

const mutations = {
    [ARTICLE_LOADING](state, data) {
        state.objectId = data.objectId
        state.title = data.title
        state.content = data.content
        state.author = data.author
        state.createdAt = data.createdAt
        state.loading = true
    }
}

export default {
    state,
    mutations
}