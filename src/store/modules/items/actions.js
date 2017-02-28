import { SET_ITEMS,
  SET_NEW_ITEM,
  CLEAR_NEW_ITEM,
  SET_ERROR
} from '../../mutation-types'

import { Items } from '../../../services'

export const list = ({commit}, search) => {
  Items.list(search.query, search.offset, search.limit)
    .then((items) => {
      commit(SET_ITEMS, items)
    })
    .catch((error) => {
      commit(SET_ERROR, error)
    })
}

export const create = ({commit}, item) => {
  commit(SET_NEW_ITEM, item)

  Items.create(item)
  .then((id) => {
    commit(CLEAR_NEW_ITEM)
  })
  .catch((error) => {
    console.log(error)
    commit(SET_ERROR, error)
  })
}
