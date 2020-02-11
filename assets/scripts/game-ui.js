'use strict'

const store = require('./store')
const events = require('./events')

const gameEnd = (message) => {
  $('#gameMessage')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onGameEnd = () => {
  const row1 = [events.board[0], events.board[1], events.board[2]]
  const row2 = [events.board[3], events.board[4], events.board[5]]
  const row3 = [events.board[6], events.board[7], events.board[8]]
  const col1 = [events.board[0], events.board[3], events.board[6]]
  const col2 = [events.board[1], events.board[4], events.board[7]]
  const col3 = [events.board[2], events.board[5], events.board[8]]
  const diag1 = [events.board[0], events.board[4], events.board[8]]
  const diag2 = [events.board[2], events.board[4], events.board[6]]
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

  // console.log(events.board)
  // console.log(store.game.cells)

  if (logWin === false) {
    gameEnd(events.p1 + 'wins!')
  }
  // console.log(logWin)
}

const onGameSuccess = message => {
  $('#gameMessage')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onGameFailure = message => {
  $('#gameMessage')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onUpdateGameSuccess = (response) => {
  onGameSuccess('You Successfully Made a Move')
  store.game = response.game
  // console.log(store)
  // console.log('update works!')
}

const onUpdateGameFailure = () => {
  onGameFailure('Change Password Failed!')
}

const onCreateGameSuccess = response => {
  // $('.createGame').hide()
  $('div').removeClass('used')
  $('#duringPlay').show()
  $('.TTT').html('')
  store.moveCount = 0
  store.logWin = false
  store.over = false
  store.p1 = 'X'
  store.game = response.game
  // store.cells = ['', '', '', '', '', '', '', '']
  // events.board = ['', '', '', '', '', '', '', '', '']
  // events.logWin = false
  // store.over = false
  // console.log(store.game)
}

const onCreateGameFailure = () => {
  onGameFailure("Oh no! Couldn't initialize a new game.")
}

const onGetGameSuccess = (response) => {
  // console.log(response)
  onGameSuccess('You have' + response.games.length + ' games!')
  $('#gameNum').text(response.skills)
}

const onGetGameFailure = () => {
  onGameFailure('Something Went Wrong! Are You Sure There Are Stored Games?')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onGameEnd
}
