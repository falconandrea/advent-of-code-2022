const file = 'input.txt'
const fs = require('fs')

const { parseCommand, updateStacks } = require('./utils.js')

const commands = []
const stacks = {}

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return false
  }

  // Parse data
  const rows = data.split('\n').filter(item => item)
  for (const row of rows) {
    if (row.startsWith('move')) {
      commands.push(parseCommand(row))
    } else if (!row.startsWith(' 1')) {
      updateStacks(stacks, row)
    }
  }
  console.log(stacks)

  // Update stacks
  for (const command of commands) {
    for (let i = 0; i < command.count; i++) {
      const el = stacks[command.from].shift()
      stacks[command.to].unshift(el)
    }
  }

  let result = ''
  for (const [key, value] of Object.entries(stacks)) {
    result += value[0] || ''
  }
  console.log(result)
})
