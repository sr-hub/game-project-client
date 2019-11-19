'use strict'

const api = require('./api')
const formFields = require('../../lib/get-form-fields')
const ui = require('./ui')
//
const onChangePass = event => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.changePass(formData)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassFailure)
}

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = () => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// const boardData = require('./board-data.js')
// const  winners is when the board reflects three of either 'x' or 'o'
// in a row. we can show the board as an array.
// as soon as one of nine combinations of three in a row (per x or o) is hit,
// game should stop.

// check if any combination of winning indexes matches three in a row rule
// boardData.board.multiIndexOf('x') =
//
// ]
// const switchPlayer = () => {
//   const p1 = store.p1
//   // const p2 = store.p2
//
//   if (p1 === 'X') {
//     store.p1 = 'O'
//     store.p2 = 'X'
//   } else {
//     store.p1 = 'X'
//     store.p2 = 'O'
//   }
//   return p1
// }
//
// const classClicked = event => {
//   if (!event.target.className.includes(' used')) {
//     event.target.className += ' used'
//   }
//   console.log(event.target.className)
//   return (event.target.className)
// }

// const insertMark = event => {
//   event.preventDefault()
// const moveCount = store.moveCount
// const board = store.game.cells
// const p1 = store.p1
// const p2 = store.p2
//
// const row1 = [board[0], board[1], board[2]]
// const row2 = [board[3], board[4], board[5]]
// const row3 = [board[6], board[7], board[8]]
// const col1 = [board[0], board[3], board[6]]
// const col2 = [board[1], board[4], board[7]]
// const col3 = [board[2], board[5], board[8]]
// const diag1 = [board[0], board[4], board[8]]
// const diag2 = [board[2], board[4], board[6]]
// const winCons = [row1, row2, row3, col1, col2, col3, diag1, diag2]
// const checkWin = (arr) => { // found this logic on stackoverflow.
// // Code saltered to fit our conventions. author: Robert Fricke
// // url: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0] || arr[i] !== arr[1] || arr[i] !== arr[2] || arr[i] === '') {
//       // console.log(arr)
//       // console.log(arr[0])
//       return false
//     } else {
//       // console.log(arr)
//       // console.log(arr[0])
//       return true
//     }
//   }
// }
// const boardWins = winCons.map(element => checkWin(element))
// const logWin = boardWins.some(element => element === true)
// // const reportWin = () => {
// //   if (logWin === true) {
// //     $('#status').text('')
// //     $('#clickResult').text('The Game Has Ended! ' + p1 + ' Won! Start a New Game!')
// //   }
// // }
//
// if (!logWin === true && moveCount !== 9) {
//   if (!event.target.className.includes(' used')) {
//     $(event.target).html(`<h2>${switchPlayer()}</h2>`)
//     $('#clickResult').text('You Marked an ' + p1 + '!')
//     $('#status').text("It's now " + p2 + "'s turn.")
//     addArray(event)
//     classClicked(event)
//     store.moveCount++
//     console.log(event.target.className)
//     console.log(store.moveCount)
//   } else {
//     $('#clickResult').text(`Oops! It Looks Like There's Already Something There`)
//   }
// } else if (logWin === true) {
//   $('#status').text('')
//   $('#clickResult').text('The Game Has Ended! ' + p1 + ' Won! Start a New Game!')
// } else if (moveCount === 9) {
//   $('#status').text("It's a tie!")
// }
// }

// const addArray = event => {
//   const board = store.game.cells
//   const p1 = store.p1
//   board.splice(parseInt(event.target.id, 10), 1, p1)
// }

const addHandlers = event => {
  // $('.TTT').on('click', insertMark)
  // $('.TTT').on('click', classClicked)
  // $('.TTT').on('click', addArray)
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePass').on('submit', onChangePass)
  $('#signOut').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
