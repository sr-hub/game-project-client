'use strict'

const board = ['', '', '', '', '', '', '', '', '']
console.log(board)

const row1 = [board[0], board[1], board[2]]
const row2 = [board[3], board[4], board[5]]
const row3 = [board[6], board[7], board[8]]
const col1 = [board[0], board[1], board[2]]
const col2 = [board[3], board[4], board[5]]
const col3 = [board[6], board[7], board[8]]
const diag1 = [board[0], board[4], board[8]]
const diag2 = [board[2], board[4], board[6]]

const winCons = [row1, row2, row3, col1, col2, col3, diag1, diag2]

const checkWin = (arr) => { // found this logic on stackoverflow.
// Code saltered to fit our conventions. author: Robert Fricke
// url: https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
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

// check with console log. worked.
// console.log(checkWin(row1))

const boardWins = winCons.map(element => checkWin(element))
console.log(boardWins)

const logWin = boardWins.some(element => true)
console.log(logWin)

// now that we can check to see if there is a win, we need to figure out which
// marker it is, x or o, in the winning row/col/diag

//also, if logWin is true, we need to stop play.

module.exports = {
  board,
  logWin
  // winningBoards
}
