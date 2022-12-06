const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return false
  }

  // Parse data
  const rows = data.split('\n').filter(item => item)
    .map(item => {
      const chars = item.split('')
      let value = 0
      for (let i = 3; i < chars.length; i++) {
        const temp = chars.slice(i - 3, i + 1)
        if (temp.length === [...new Set(temp)].length) {
          value = i
          break
        }
      }
      return value + 1
    })

  console.log(rows[0])
})
