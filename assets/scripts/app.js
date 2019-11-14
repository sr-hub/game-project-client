'use strict'

const store = require('./store')
// use require with a reference to bundle the file and use it in this file

const authEvents = require('./events')
const exampleEvents = require('./examples/events')
// use require without a reference to ensure a file is bundled
// require('./example')

// document.ready
$(() => {
  authEvents.addHandlers()
  exampleEvents.addHandlers()
})
