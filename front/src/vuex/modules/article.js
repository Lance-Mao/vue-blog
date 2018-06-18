import { ARTICLE_POST, ARTICLE_GET } from '../mutation-types'

const state = {
    isFetching: false,
    curPage: Number,
    length: Number,
    articleList: []
}

const mutations = {
    [ARTICLE_POST](state, data) {
        state.articleList.push(data.data)
    },
    [ARTICLE_GET](state, data) {
        state.articleList = data.data
    }
}

export default {
    state,
    mutations
}