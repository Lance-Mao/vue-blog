import { ARTICLE_POST } from '../mutation-types'

const state = {
    isFetching: false,
    curPage: Number,
    length: Number,
    contentList: []
}

const mutations = {
    [ARTICLE_POST](state, data) {
        state.contentList.push(data)
    }
}

export default {
    state,
    mutations
}