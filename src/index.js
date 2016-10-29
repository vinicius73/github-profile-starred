import getRepos from './starred/repos'

getRepos('vedovelli')
  .then(result => {
    console.log(result.analizis)
  })
