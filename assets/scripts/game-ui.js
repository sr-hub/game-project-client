'use strict'
const store = require('./store')

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
  onSuccess('You Changed Your Password!')
}

const onChangePassFailure = () => {
  onFailure('Change Password Failed!')
}

const onSignOutSuccess = () => {
  onSuccess('You Signed Out! Come Back Soon!')
  $('.after-auth').hide()
  $('.before-auth').show()
  store.user = {}
}

const onSignOutFailure = () => {
  onFailure("You Couldn't Be Logged Out.")
}

const onSignUpSuccess = () => {
  onSuccess('You Signed Up! Welcome to Tic-Tac-Toe!')
}

const onSignUpFailure = () => {
  onFailure('Something Went Wrong! Does Your Account Already Exist?')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store)
  onSuccess('Sign In Successful! Welcome Back.')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure("Oops. Couldn't Sign You In. Please Try Again or Create An Account.")
}

//const onNewGame

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
