'use strict'

// const store = require('../store')
// const api = require('./api')
// const formFields = require('../../../lib/get-form-fields')
// const ui = require('./ui')
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
let boardData = require('./board-data.js')

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

const addArray = event => {
  boardData.board.splice(parseInt(event.target.id, 10), 1, p1)
}

const classClicked = event => {
  if (!event.target.className.includes(' used')) {
    event.target.className += ' used'
  }
  console.log(event.target.className)
  return (event.target.className)
}

const insertMark = event => {
  event.preventDefault()
  if (!event.target.className.includes(' used')) {
    $(event.target).html(`<h2>${switchPlayer()}</h2>`)
    switchPlayer()
    $('#clickResult').text(`You Marked an ${switchPlayer()}!`)
  } else {
    $('#clickResult').text(`Oops! It Looks Like There's Already Something There`)
  }
  console.log(boardData.board)
}

const addHandlers = event => {
  $('.TTT').on('click', insertMark)
  $('.TTT').on('click', classClicked)
  $('.TTT').on('click', addArray)
}

module.exports = {
  addHandlers
}
