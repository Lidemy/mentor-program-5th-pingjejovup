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
  const totalNum = parseInt(lines[0]) + 1
  const firstChar = lines[1]

  let aGroupCount = 1
  let bGroupCount = 0
  const aGroupArray = [1]
  const bGroupArray = []
  for (let i = 2; i < totalNum; i++) {
    if (lines[i] === firstChar) {
      aGroupCount++
      aGroupArray.push(i)
    } else {
      bGroupCount++
      bGroupArray.push(i)
    }
  }

  if (aGroupCount > bGroupCount && bGroupCount !== 0) {
    bGroupArray.forEach((e) => console.log(e))
  } else if (aGroupCount < bGroupCount && aGroupCount !== 0) {
    aGroupArray.forEach((e) => console.log(e))
  } else {
    console.log('PEACE')
  }
}
