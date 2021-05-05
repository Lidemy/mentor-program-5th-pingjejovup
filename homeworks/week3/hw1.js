/* eslint yoda: [2, "never", { "exceptRange": true }] */
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
    if (1 <= n && n <= 30) {
      let text = ''
      for (let i = 0; i < n; i++) {
        text += '*'
        console.log(text)
      }
    }
  })
}
