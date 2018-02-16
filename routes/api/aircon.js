const express = require('express')
const exec  = require('child_process').exec

const router = express.Router()

router.get('/hot', (req, res, next) => {
  exec('irsend SEND_ONCE aircon hot_on')

  res.header('Content-Type', 'application/json; charset=utf-8')
  res.json({
    message: 'aircon: hot'
  })
})

router.get('/cool', (req, res, next) => {
  exec('irsend SEND_ONCE aircon cool_on')

  res.send({
    message: 'aircon: cool'
  })
})

router.get('/off', (req, res, next) => {
  exec('irsend SEND_ONCE aircon off')

  res.send({
    message: 'aircon: off'
  })
})

module.exports = router
