const axios = require('axios')

const BASE_URL = 'https://lidemy-book-store.herokuapp.com'
const GET_URL = '/books'
const queryString = '?_limit=10'

axios.get(BASE_URL + GET_URL + queryString)
  .then((response) => {
    response.data.forEach((x) => console.log(`${x.id} ${x.name}`))
  })
  .catch((error) => {
    console.log('Err:', error)
  })
