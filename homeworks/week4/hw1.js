const axios = require('axios')

const hostUrl = 'https://lidemy-book-store.herokuapp.com'
const getUrl = '/books?_limit='
const limitNum = '10'

axios.get(hostUrl + getUrl + limitNum)
  .then((response) => {
    response.data.map((x) => console.log(`${x.id} ${x.name}`))
  })
  .catch((error) => {
    console.log('Err:', error)
  })
