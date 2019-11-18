'use strict'

const store = require('./store')
const events = require('./events')

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

const onUpdateGameSuccess = () => {
  onGameSuccess('You Successfully Made a Move')
  store.game.cells = events.board
  console.log(store)
  console.log('update works!')
}

const onUpdateGameFailure = () => {
  onGameFailure('Change Password Failed!')
}

const onCreateGameSuccess = gameData => {
  // $('.createGame').hide()
  $('#duringPlay').show()
  $('.TTT').html('')
  console.log($('.TTT').html())
  store.game = gameData.game
  events.board = ['', '', '', '', '', '', '', '', '']
  console.log(store.game)
}

const onCreateGameFailure = () => {
  onGameFailure("Oh no! Couldn't initialize a new game.")
}

const onGetGameSuccess = () => {
  onGameSuccess('Check Out The Game History!')
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
  onGetGameFailure
}
