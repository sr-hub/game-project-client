'use strict'

// const store = require('../store')
// const api = require('./api')
// const formFields = require('../../../lib/get-form-fields')
// const ui = require('./ui')

// const onChangePass = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = formFields(form)
//
//   api.changePass(formData)
//     .then(ui.onChangePassSuccess)
//     .catch(ui.onChangePassFailure)
// }
//
// const onSignUp = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = formFields(form)
//
//   api.signUp(formData)
//     .then(ui.onSignUpSuccess)
//     .catch(ui.onSignUpFailure)
// }
//
// const onSignIn = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = formFields(form)
//
//   api.signIn(formData)
//     .then(ui.onSignInSuccess)
//     .catch(ui.onSignInFailure)
// }
//
// const onSignOut = () => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = formFields(form)
//
//   api.signOut(formData)
//     .then(ui.onSignOutSuccess)
//     .catch(ui.onSignOutFailure)
// }
//
// const addHandlers = event => {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#change-pass').on('submit', onChangePass)
//   $('#sign-out').on('submit', onSignOut)
// }
const p1 = 'x'
const p2 = 'o'

const switchPlayer = pl => {
  if (pl === p1) {
    pl = p2
  } else {
    pl = p1
  }
  console.log(pl)
  return pl
}

const insertMark = event => {
  event.preventDefault()
  $(event.target).html(switchPlayer)
}

const addHandlers = event => {
  $('.TTT').on('click', insertMark)
}

module.exports = {
  addHandlers
}
