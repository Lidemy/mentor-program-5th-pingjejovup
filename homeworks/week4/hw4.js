const axios = require('axios')

const cliendID = 'a86opnego3mg86jju9kwq97qcgvdie'
const getUrl = '/games/top'
const twitchAPI = axios.create({
  baseURL: 'https://api.twitch.tv/kraken',
  timeout: 1000,
  headers: {
    Accept: 'application / vnd.twitchtv.v5 + json',
    'Client-ID': cliendID
  }
})

twitchAPI.get(getUrl)
  .then((response) => {
    const res = response.data.top
    res.forEach((element) => {
      console.log(`${element.viewers} ${element.game.name}`)
    })
  }
  )
  .catch((error) => {
    console.log('Err:', error)
  })
