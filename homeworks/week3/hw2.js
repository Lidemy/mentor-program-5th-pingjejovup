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
  lines.forEach((n) => {
    const startNum = parseInt(n.split(' ')[0])
    const endNum = parseInt(n.split(' ')[1])

    for (let i = startNum; i <= endNum; i++) {
      const sq = i.toString().length
      const caculateCallback = (acc, cur) => acc + Math.pow(cur, sq)
      const digits = i.toString().split('')
      const realDigits = digits.map(Number)
      const res = realDigits.reduce(caculateCallback, 0)
      if (i === res) {
        console.log(i)
      }
    }
  })
}
