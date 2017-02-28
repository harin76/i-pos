import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module
