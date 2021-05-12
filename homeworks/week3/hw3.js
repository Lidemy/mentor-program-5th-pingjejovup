const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const range = parseInt(lines[0])
  const numberArray = lines.slice(1, range + 1)
  let isPrime = true
  console.log(lines)
  console.log(numberArray)
  numberArray.forEach((num) => {
    num = parseInt(num)
    if (num === 1) {
      console.log('Composite')
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false
          break
        } else {
          isPrime = true
        }
      }

      if (isPrime) {
        console.log('Prime')
      } else {
        console.log('Composite')
      }
    }
  })
}
