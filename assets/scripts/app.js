'use strict'

// const store = require('./store')
// use require with a reference to bundle the file and use it in this file

const authEvents = require('./events')
const board = require('./board-data')
// use require without a reference to ensure a file is bundled
// require('./example')

// document.ready
$(() => {
  authEvents.addHandlers()
})
