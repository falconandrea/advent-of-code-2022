const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const chunks = data.split('\n\n').map(chunk => {
    return chunk.split('\n').reduce((sum, value) => {
      return value ? parseInt(value) + sum : sum
    }, 0)
  })
  chunks.sort((a, b) => b - a)

  // Solution 1
  console.log(chunks[0])

  // Solution 2
  console.log(chunks[0] + chunks[1] + chunks[2])
})
