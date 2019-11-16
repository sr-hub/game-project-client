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

const onUpdateGameSuccess = click => {
  onGameSuccess('You Changed Your Password!')
  store.game.cells = events.board
  console.log(store)
  console.log('update works!')
}

const onUpdateGameFailure = () => {
  onGameFailure('Change Password Failed!')
}

// const onNewGameSuccess = () => {
//   // $('.after-auth').hide()
//   // $('.before-auth').show()
//   store.user = {}
// }

const onNewGameFailure = () => {
  onGameFailure("Oh no! Couldn't initialize a new game.")
}

const onGetGameSuccess = () => {
  onGameSuccess('Check Out The Game History!')
}

const onGetGameFailure = () => {
  onGameFailure('Something Went Wrong! Are You Sure There Are Stored Games?')
}


//const onNewGame

module.exports = {
  // onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetGameSuccess,
  onGetGameFailure
}
