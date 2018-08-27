import ApiService from '@/common/api.service'
import { FETCH_CONFIG } from './actions.type'
import { SET_CONFIG, SET_ERROR } from './mutations.type'

export const state = {
  config: {}
}

export const getters = {
  config (state) {
    return state.config
  }
}

export const actions = {
  [FETCH_CONFIG] (context) {
    return new Promise((resolve) => {
      ApiService
        .get('config')
        .then(({data}) => {
          context.commit(SET_CONFIG, data)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response)
        })
    })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_CONFIG] (state, config) {
    state.config = config
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
