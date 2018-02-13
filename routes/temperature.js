const express = require('express')
const router = express.Router()
const file = require('../helper/file')
const googlehome = require('google-home-notifier')

const language = 'ja'
googlehome.device('Home', language)

router.get('/', (req, res, next) => {
  const data = file.readFile('/home/pi/python/record.csv')
  const latest = data[data.length - 1]
  const temperature = latest[1]
  const message = `現在の室温は${temperature}度です`

  googlehome.notify(message, res => {
    console.log(res)
  })

  res.send({
    message: message
  })
})

module.exports = router
