const axios = require('axios')

const BASE_URL = 'https://lidemy-book-store.herokuapp.com'
const GET_URL = '/books'
const queryString = '?_limit=30'
const params = process.argv

const thefunc = params[2]
const theArgs = params[3]
const theUpdateArgs = params[4]

const exeFunc = {
  list: () => {
    axios.get(BASE_URL + GET_URL + queryString)
      .then((response) => {
        response.data.map((x) => printBooks(x))
      })
      .catch((error) => {
        console.log('Err:', error)
      })
  },
  read: (bookID) => {
    axios.get(`${BASE_URL + GET_URL}/${bookID}`)
      .then((response) => {
        printBooks(response.data)
      })
      .catch((error) => {
        console.log('Err:', error)
      })
  },
  delete: (bookID) => {
    axios.delete(`${BASE_URL + GET_URL}/${bookID}`)
      .then((response) => {
        console.log('success')
      })
      .catch((error) => {
        console.log(error)
      })
  },
  create: (bookName) => {
    axios.post(BASE_URL + GET_URL, {
      name: bookName
    })
      .then((response) => {
        console.log('success')
      })
      .catch((error) => {
        console.log(error)
      })
  },
  update: (bookID, bookName) => {
    axios.patch(`${BASE_URL + GET_URL}/${bookID}`, {
      name: bookName
    })
      .then((response) => {
        console.log('success')
      })
      .catch((error) => {
        console.log(error)
      })
  }

}

function printBooks(book) {
  console.log(`${book.id} ${book.name}`)
}
exeFunc[thefunc](theArgs, theUpdateArgs)
