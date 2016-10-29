const axios = require('axios')
const config = require('../config')

module.exports = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    access_token: config.token
  }
})
