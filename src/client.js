const axios = require('axios')
const config = require('../config')

module.exports = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${config.token}`,
    'user-agent': 'CODECASTS-github-lang-profile'
  }
})
