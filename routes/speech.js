const express = require('express')
const googlehome = require('google-home-notifier')

const router = express.Router()
const language = 'ja'

googlehome.device('Home', language)

router.get('/', (req, res, next) => {
  googlehome.notify('こんにちは', res => {
    console.log(res)
  })

  res.send({
    message: 'speech root'
  })
})

module.exports = router
