const express = require('express')
const exec  = require('child_process').exec

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('aircon', {
    title: 'Aircon',
  })
})

router.get('/hot', (req, res, next) => {
  let response
  exec('irsend SEND_ONCE aircon hot_on')
  res.redirect('/aircon')
})

router.get('/cool', (req, res, next) => {
  let response
  exec('irsend SEND_ONCE aircon cool_on')
  res.redirect('/aircon')
})

router.get('/off', (req, res, next) => {
  let response
  exec('irsend SEND_ONCE aircon off')
  res.redirect('/aircon')
})

module.exports = router
