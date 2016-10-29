import getRepos from './starred/repos'

getRepos('vinicius73')
  .then(result => {
    console.log(result)
  })
