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
  const maxAmount = parseInt(lines[0])
  const numArray = lines[1].split(' ').map(Number)
  const sliceArray = numArray.slice(0, maxAmount)

  const countArr = []

  for (let i = 1; i < numArray[maxAmount - 1] + 1; i++) {
    const count = sliceArray.filter((x) => x === i).length
    countArr.push(count)
  }
  console.log(Math.max(...countArr))
}
