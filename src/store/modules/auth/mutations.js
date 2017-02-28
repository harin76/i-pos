import { SET_LOGIN_STATUS } from '../../mutation-types'

const mutations = {
  [SET_LOGIN_STATUS]: (state, value) => {
    state.loggedIn = value
  }
}

export default mutations
