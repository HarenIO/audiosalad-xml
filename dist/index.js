
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./audiosalad-xml.cjs.production.min.js')
} else {
  module.exports = require('./audiosalad-xml.cjs.development.js')
}
