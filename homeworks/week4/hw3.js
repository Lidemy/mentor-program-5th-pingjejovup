const axios = require('axios')

const hostUrl = 'https://restcountries.eu/rest/v2/name/'

const params = process.argv

const countryName = params[2]

const exeFunc = {
  getName: () => {
    axios.get(`${hostUrl}${countryName}`)
      .then((response) => {
        const obj = response.data[0]
        const output = `國家：${obj.name}
首都：${obj.capital}
貨幣：${obj.currencies[0].code}
國碼：${obj.callingCodes[0]}`
        console.log(output)
      })
      .catch((error) => {
        console.log('Err:', error)
      })
  }
}

exeFunc.getName()
