'use strict'
const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const store = require('./store')
const formFields = require('../../lib/get-form-fields')

const switchPlayer = () => {
  const p1 = store.p1
  // const p2 = store.p2

  if (p1 === 'X') {
    store.p1 = 'O'
    store.p2 = 'X'
  } else {
    store.p1 = 'X'
    store.p2 = 'O'
  }
  return p1
}

const classClicked = event => {
  if (!event.target.className.includes(' used')) {
    event.target.className += ' used'
  }
  // console.log(event.target.className)
}

// const addArray = event => {
//   const board = store.game.cells
//   const p1 = store.p1
//   board.splice(parseInt(event.target.id, 10), 1, p1)
// }

const onGetGame = () => {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)

  gameApi.updateGame(formData)
    .then(gameUi.onGetGameSuccess)
    .catch(gameUi.onGetGameFailure)
}

const onGetGames = (id) => {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)

  gameApi.getAllGames(formData)
    .then(gameUi.onGetGameSuccess)
    .catch(gameUi.onGetGameFailure)
}

const onNewGame = (event) => {
  event.preventDefault()
  // const class1 = $('.TTT').attr('class')
  // console.log(class1)

  gameApi.createGame()
    .then(gameUi.onCreateGameSuccess)
    .catch(gameUi.onCreateGameFailure)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  const logWin = store.logWin
  const moveCount = store.moveCount
  const p1 = store.p1
  const p2 = store.p2

  if (logWin !== true && moveCount !== 9 && store.over !== true) {
    const id = event.target.id
    const board = store.game.cells
    // update board with players turn
    board[id] = p1
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
    store.logWin = boardWins.some(element => element === true)

    if (!event.target.className.includes(' used')) {
      $(event.target).html(`<h2>${switchPlayer()}</h2>`)
      if (store.logWin === true) {
        $('#status').text('')
        $('#clickResult').text('The Game Has Ended! ' + p1 + ' Won! Start a New Game!')
      } else if (logWin !== true && moveCount === 8) {
        $('#status').text("It's a tie!")
        $('#clickResult').text('Start a New Game!')
      } else {
        $('#clickResult').text('You Marked an ' + p1 + '!')
        $('#status').text("It's now " + p2 + "'s turn.")
      }
      classClicked(event)
      store.moveCount++
      // console.log(event.target.className)
      // console.log(store.moveCount)
      gameApi.updateGame(id, p1, store.logWin, store.moveCount)
        // .then(gameUi.onGameEnd)
        .then(gameUi.onUpdateGameSuccess)
        .catch(gameUi.onUpdateGameFailure)
    } else {
      $('#clickResult').text(`Oops! It Looks Like There's Already Something There`)
    }
  } else if (logWin === true) {
    $('#status').text('')
    $('#clickResult').text('The Game Has Ended! ' + p1 + ' Won! Start a New Game!')
  }
  // console.log(store.moveCount)
}

const gameHandlers = event => {
  $('#getGames').on('submit', onGetGames)
  $('#getGameByID').on('submit', onGetGame)
  $('#newGame').on('submit', onNewGame)
  $('.TTT').on('click', onUpdateGame)
}

module.exports = {
  gameHandlers
}
