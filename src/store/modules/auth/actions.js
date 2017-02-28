// import { SET_LOGIN_STATUS } from '../../mutation-types'
import { Auth } from '../../../services'

export const login = ({commit}, login) => {
  return Auth.login(login.email, login.password)
  // commit(SET_LOGIN_STATUS, true)
}

export const logout = ({commit}, logout) => {
  return Auth.logout()
  // commit(SET_LOGIN_STATUS, false)
}
