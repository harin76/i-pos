import { SET_ITEMS,
  SET_NEW_ITEM,
  CLEAR_NEW_ITEM,
  SET_ERROR
} from '../../mutation-types'

const mutations = {
  [SET_ITEMS]: (state, value) => {
    state.items = value
    // clear the error
    state.errors = null
  },
  [SET_ERROR]: (state, value) => {
    console.log(value)
    state.errors = value
  },
  [SET_NEW_ITEM]: (state, newItem) => {
    state.newItem = newItem
  },
  [CLEAR_NEW_ITEM]: (state) => {
    state.newItem = {
      name: null,
      category: null,
      description: null,
      variants: []
    }
  }

}

export default mutations
