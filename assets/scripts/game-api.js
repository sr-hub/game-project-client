'use strict'
const store = require('./store')
const events = require('./events')
const config = require('./config')

const createGame = () => {
  console.log('your create game button worked!')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getGame = () => {
  console.log('your get game button worked!')
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getAllGames = () => {
  console.log('your get games button worked!')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGame = (index, symbol) => {
  console.log('your update game function worked!')
  console.log(store.game)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': event.target.id,
          'value': events.p1
        },
          'over': false
      }
    },
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createGame,
  getGame,
  updateGame,
  getAllGames
}
