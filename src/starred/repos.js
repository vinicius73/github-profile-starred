import load from './load'
import { languages } from './analizers'

export default username => {
  return load(username)
    .then(repos => {
      const result = { repos }
      result.analizis = { languages: languages(repos) }
      return result
    })
}
