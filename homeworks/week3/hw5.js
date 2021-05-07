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
  if (1 <= range && range <= 50) {
    const roundArr = lines.slice(1, range + 1)
    roundArr.forEach((str) => {
      const nums = str.split(' ').map(BigInt)
      if (nums[0] === nums[1]) {
        return console.log('DRAW')
      }
      if (nums[nums.length - 1] === BigInt(1)) {
        // greater
        if (nums[0] > nums[1]) {
          console.log('A')
        } else {
          console.log('B')
        }
      } else {
        if (nums[0] > nums[1]) {
          console.log('B')
        } else {
          console.log('A')
        }
      }
    })
  }
}
