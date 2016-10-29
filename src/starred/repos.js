import client from '../client'
import parseResponse from '../parcers/response'

const perPage = 100
const getRepos = (username, page = 1) => {
  const params = { page, per_page: perPage }
  return client.get(`/users/${username}/starred`, { params })
    .then(parseResponse)
}

module.exports = getRepos
