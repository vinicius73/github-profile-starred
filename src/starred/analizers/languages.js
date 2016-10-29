import toInteger from 'lodash.tointeger'

const increment = (obj, key, value) => {
  if (obj[key] === undefined) {
    obj[key] = 0
  }

  obj[key] = toInteger(value) + toInteger(obj[key])

  return obj
}

export default repos => repos.reduce((acc, repo) => increment(acc, repo.language, 1), {})
