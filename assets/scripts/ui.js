'use strict'
const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}
const onChangePassSuccess = () => {
  onSuccess('You changed your pass!')
}

const onChangePassFailure = () => {
  onFailure('Change Password Failed you bag of meat.')
}

const onSignOutSuccess = () => {
  onSuccess('You did it bae!')
  $('.after-auth').hide()
  $('.before-auth').show()
  store.user = {}
}

const onSignOutFailure = () => {
  onFailure("You couldn't be logged out.")
}

const onSignUpSuccess = () => {
  onSuccess('You did it bae! You Signed Up!')
}

const onSignUpFailure = () => {
  onFailure('Ohhhh no! You blew it! Failed to Sign Up')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store)
  onSuccess('Boo caught you sleeping. Looking good; welcome back.')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure("Your pass was wrong or your account doesn't exist.")
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePassSuccess,
  onChangePassFailure,
  onSignOutSuccess,
  onSignOutFailure
}
