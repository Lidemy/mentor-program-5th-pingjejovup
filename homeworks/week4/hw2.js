const axios = require('axios')

const hostUrl = 'https://lidemy-book-store.herokuapp.com'
const getUrl = '/books'
const limitNum = '?_limit=30'
const params = process.argv

const thefunc = params[2]
const theArgs = params[3]
const theUpdateArgs = params[4]

const exeFunc = {
  list: () => {
    axios.get(hostUrl + getUrl + limitNum)
      .then((response) => {
        response.data.map((x) => console.log(printBooks(x)))
      })
      .catch((error) => {
        console.log('Err:', error)
      })
  },
  read: (bookID) => {
    axios.get(`${hostUrl + getUrl}/${bookID}`)
      .then((response) => {
        console.log(printBooks(response.data))
      })
      .catch((error) => {
        console.log('Err:', error)
      })
  },
  delete: (bookID) => {
    axios.delete(`${hostUrl + getUrl}/${bookID}`)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
  },
  create: (bookName) => {
    axios.post(hostUrl + getUrl, {
      name: bookName
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
  },
  update: (bookID, bookName) => {
    axios.patch(`${hostUrl + getUrl}/${bookID}`, {
      name: bookName
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
  }

}

function printBooks(book) {
  return `${book.id} ${book.name}`
}
exeFunc[thefunc](theArgs, theUpdateArgs)
