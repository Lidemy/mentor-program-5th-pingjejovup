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
  const maxAmount = Math.floor(lines[0])
  const totalAmount = parseInt(lines[1])

  if (maxAmount === 0) { return console.log(0) }

  const sliceArray = lines.slice(2, totalAmount + 2).map(Number)
  const sortFunc = (a, b) => b - a
  const sortArray = sliceArray.sort(sortFunc)
  const topValueArray = sortArray.slice(0, maxAmount)

  let output = 0
  topValueArray.forEach((element) => {
    output += element
  })
  console.log(output)
}
