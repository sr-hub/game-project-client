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
let p1 = 'o'
const switchPlayer = () => {
  if (p1 === 'x') {
    p1 = 'o'
  } else {
    p1 = 'x'
  }
  console.log(p1)
  return p1
}

const classClicked = obj => {
  obj.className += ' used'
  console.log(obj.className)
}

const insertMark = event => {
  event.preventDefault()
  if (event.class !== 'used') {
    $(event.target).html(`<h2>${switchPlayer()}</h2>`)
  } else {
    console.log("There's already a mark there!")
  }
  switchPlayer()
  console.log(switchPlayer())
}

const addHandlers = event => {
  $('.TTT').on('click', insertMark)
  $('.TTT').on('click', classUsed)
}

module.exports = {
  addHandlers
}
