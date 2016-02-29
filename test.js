'use strict'

var test = require('tape')
var pipe = require('./')

test(function (t) {
  t.plan(3)

  var pipeline = pipe(first, second)

  pipeline(1, function (err, value) {
    if (err) return t.end(err)
    t.equal(value, 3)
  })

  function first (value, callback) {
    t.equal(value, 1)
    callback(null, 2)
  }

  function second (value, callback) {
    t.equal(value, 2)
    callback(null, 3)
  }
})
