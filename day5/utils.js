const parseCommand = string => {
  const command = string.replace('move', '').replace('from', '-').replace('to', '-').replace(/ /g, '').split('-')
  return { count: parseInt(command[0]), from: parseInt(command[1]), to: parseInt(command[2]) }
}

const updateStacks = (stacks, row) => {
  const temp = row.split('')
  let counterStack = 0
  for (const index in temp) {
    if (index % 4 === 0) {
      counterStack++
    }
    if (temp[index] !== ' ' && temp[index] !== '[' && temp[index] !== ']') {
      if (!stacks[counterStack]) stacks[counterStack] = []
      stacks[counterStack].push(temp[index])
    }
  }
}

module.exports = {
  parseCommand,
  updateStacks
}
