'use strict'


const board = ['', '', '', '', '', '', '', '', '']
// console.log(board)
//
// const winCons = [row1, row2, row3, col1, col2, col3, diag1, diag2]
//
// const checkWin = (arr) => { // found this logic on stackoverflow.
// // Code saltered to fit our conventions. author: Robert Fricke
// // url: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0] || arr[i] === '') {
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
//
// // check with console log. worked.
// // console.log(checkWin(row1))
//
// const boardWins = winCons.map(element => checkWin(element))
// console.log(boardWins)
//
// const logWin = boardWins.some(element => element === true)
// console.log(logWin)
const store = require('../store')
const api = require('./api')
const formFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
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

// const boardData = require('./board-data.js')
// const  winners is when the board reflects three of either 'x' or 'o'
// in a row. we can show the board as an array.
// as soon as one of nine combinations of three in a row (per x or o) is hit,
// game should stop.

// check if any combination of winning indexes matches three in a row rule
// boardData.board.multiIndexOf('x') =
//
// ]
let p1 = 'O'
let p2 = 'X'
const switchPlayer = () => {
  if (p1 === 'X') {
    p1 = 'O'
    p2 = 'X'
  } else {
    p1 = 'X'
    p2 = 'O'
  }
  console.log(p1)
  return p1
}

const classClicked = event => {
  if (!event.target.className.includes(' used')) {
    event.target.className += ' used'
  }
  console.log(event.target.className)
  return (event.target.className)
}

const insertMark = event => {
  const row1 = [board[0], board[1], board[2]]
  const row2 = [board[3], board[4], board[5]]
  const row3 = [board[6], board[7], board[8]]
  const col1 = [board[0], board[3], board[6]]
  const col2 = [board[1], board[4], board[7]]
  const col3 = [board[2], board[5], board[8]]
  const diag1 = [board[0], board[4], board[8]]
  const diag2 = [board[2], board[4], board[6]]
  const winCons = [row1, row2, row3, col1, col2, col3, diag1, diag2]
  const checkWin = (arr) => { // found this logic on stackoverflow.
  // Code saltered to fit our conventions. author: Robert Fricke
  // url: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[0] || arr[i] !== arr[1] || arr[i] !== arr[2] || arr[i] === '') {
        // console.log(arr)
        // console.log(arr[0])
        return false
      } else {
        // console.log(arr)
        // console.log(arr[0])
        return true
      }
    }
  }
  const boardWins = winCons.map(element => checkWin(element))
  const logWin = boardWins.some(element => element === true)

  event.preventDefault()

  if (!logWin === true) {
    if (!event.target.className.includes(' used')) {
      $(event.target).html(`<h2>${switchPlayer()}</h2>`)
      $('#clickResult').text('You Marked an ' + p1 + '!')
      $('#status').text("It's now " + p2 + "'s turn.'")
      addArray(event)
      console.log(board)
      console.log(row1)
      console.log(row2)
      console.log(boardWins)
      console.log(logWin)
      console.log(checkWin(row1))
      console.log(checkWin(row2))
      console.log(checkWin(row3))
      console.log(checkWin(col1))
      console.log(checkWin(col2))
      console.log(checkWin(col3))
      console.log(checkWin(diag1))
      console.log(checkWin(diag2))
    } else {
      $('#clickResult').text(`Oops! It Looks Like There's Already Something There`)
    }
  } else {
    $('#status').text('')
    $('#clickResult').text('The Game Has Ended! ' + p1 + ' Won! Start a New Game!')
    console.log(board)
    console.log(row1)
    console.log(row2)
    console.log(row3)
    console.log(col1)
    console.log(col2)
    console.log(col3)
    console.log(diag1)
    console.log(diag2)
    console.log(checkWin(row1))
    console.log(checkWin(row2))
    console.log(checkWin(row3))
    console.log(checkWin(col1))
    console.log(checkWin(col2))
    console.log(checkWin(col3))
    console.log(checkWin(diag1))
    console.log(checkWin(diag2))
    console.log(boardWins)
    console.log(logWin)
  }
}

const addArray = event => {
  board.splice(parseInt(event.target.id, 10), 1, p1)
}

const addHandlers = event => {
  $('.TTT').on('click', insertMark)
  $('.TTT').on('click', classClicked)
  $('.TTT').on('click', addArray)
}

module.exports = {
  addHandlers
}
