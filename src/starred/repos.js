import load from './load'

export default username => {
  return load(username)
    .then(repos => {
      // console.log(repos)
      return repos.length
    })
}
