'use strict'
const store = require('./store')
const events = require('./events')
const config = require('./config')

const changePass = formData => {
  console.log('your change-pass button worked!')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  // console.log('you changed your password!')
}

const signOut = () => {
  console.log('your sign-out button worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
  // console.log('you signed out!')
}

const signUp = formData => {
  console.log('your sign-up button worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log('your sign-in button worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut
}
