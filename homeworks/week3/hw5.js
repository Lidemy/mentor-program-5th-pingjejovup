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
  const range = parseInt(lines[0])
  const roundArr = lines.slice(1, range + 1)
  roundArr.forEach((str) => {
    const nums = str.split(' ').map(BigInt)
    if (nums[0] === nums[1]) {
      return console.log('DRAW')
    }
    if (nums[2] === BigInt(1)) {
      console.log(nums[0] > nums[1] ? 'A' : 'B')
    } else {
      console.log(nums[0] > nums[1] ? 'B' : 'A')
    }
  })
}
