'use strict'
const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const formFields = require('../../lib/get-form-fields')

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

const onNewGame = () => {
  event.preventDefault()
  $('div').removeClass('used')

  gameApi.createGame()
    .then(gameUi.onCreateGameSuccess)
    .catch(gameUi.onCreateGameFailure)
}

const onUpdateGame = () => {
  event.preventDefault()

  const form = event.target
  const formData = formFields(form)

  gameApi.updateGame(formData)
    .then(gameUi.onUpdateGameSuccess)
    .catch(gameUi.onUpdateGameFailure)
}

const gameHandlers = event => {
  $('.TTT').on('click', onUpdateGame)
  $('#getGames').on('submit', onGetGames)
  $('#getGameByID').on('submit', onGetGame)
  $('#newGame').on('submit', onNewGame)
  $('.TTT').on('click', onUpdateGame)
}

module.exports = {
  gameHandlers
}
