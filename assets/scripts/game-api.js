'use strict'
const store = require('./store')
const events = require('./events')
const config = require('./config')

const createGame = () => {
  console.log('your create game button worked!')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'POST',
    data: {}
  })
  // console.log('you changed your password!')
}

const getGame = () => {
  console.log('your get games button worked!')
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

const updateGame = formData => {
  console.log('your update game function worked!')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": 0,
          "value": ""
        },
          "over": false
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
  updateGame
}
