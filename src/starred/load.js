import isEmpty from 'lodash.isempty'
import client from '../client'
import parseResponse from '../parsers/response'

const perPage = 150

const loadStarreds = (username, page = 1, prevData = []) => {
  const params = { page, per_page: perPage }
  const concat = result => {
    result.data = prevData.concat(result.data)
    return result
  }

  const next = ({data, meta}) => {
    if (!isEmpty(meta.pagination.next)) {
      return loadStarreds(username, meta.pagination.next, data)
    }

    return data
  }

  return client.get(`/users/${username}/starred`, { params })
    .then(parseResponse)
    .then(concat)
    .then(next)
}

export default loadStarreds
