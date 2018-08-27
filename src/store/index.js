import Vue from 'vue'
import Vuex from 'vuex'

import config from './config.module.js'
import home from './home.module'
import auth from './auth.module'
import article from './article.module'
import profile from './profile.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    home,
    auth,
    article,
    profile
  }
})
