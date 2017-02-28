import db from '../db'

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    db.users
      .where('email')
      .equals(email)
      .first((user) => {
        if (user && user.password === password) {
          window.localStorage.setItem('loggedIn', true)
          return resolve(true)
        } else {
          return reject(false)
        }
      })
      .catch((error) => reject(error))
  })
}

const isLoggedIn = () => {
  const status = window.localStorage.getItem('loggedIn', false)
  return status === 'true'
}

const logout = () => {
  window.localStorage.setItem('loggedIn', false)
  return false
}

export default {
  isLoggedIn,
  login,
  logout
}
