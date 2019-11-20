'use strict'

// const store = require('./store')
// use require with a reference to bundle the file and use it in this file

const events = require('./events')
const game = require('./game-events')
// use require without a reference to ensure a file is bundled
// require('./example')

// document.ready
$(() => {
  events.addHandlers()
  game.gameHandlers()
})

$(() => {
  let currentPlayer = '✕'

  const onBoxClick = (event) => {
    console.log('click')
    const $box = $(event.target)
    currentPlayer = currentPlayer === '○' ? '✕' : '○'
    $box.css('background', 'transparent').text(currentPlayer)
  }

  $('.box').on('click', onBoxClick)
})
