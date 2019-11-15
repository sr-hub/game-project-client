'use strict'
const store = require('./store')
const events = require('./events')
const config = require('./config')

const changePass = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  console.log('you changed your password!')
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  console.log('you signed out!')
}

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
  console.log('you signed up!')
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
  console.log('you signed in!')
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut,
}
