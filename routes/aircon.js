const express = require('express')
const exec  = require('child_process').exec

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('aircon', {
    title: 'Aircon',
  })
})

module.exports = router
