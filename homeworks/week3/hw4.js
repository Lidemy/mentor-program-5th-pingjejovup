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
  const input = lines[0]
  const stringArr = input.split('')
  const reverseWord = stringArr.reverse().join('')
  console.log(reverseWord === input ? 'True' : 'False')
}
