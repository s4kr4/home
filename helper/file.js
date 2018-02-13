const fs = require('fs')
const csvSync = require('csv-parse/lib/sync')

module.exports = {
  readFile: path => {
    const data = fs.readFileSync(path, 'utf8')
    return csvSync(data)
  }
}

