const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const groups = data
    .split('\n').filter(item => item)
    .map(rows => rows.split(',').map(item => item.split('-').map(Number)))
    .filter(items => {
      return (
        (items[0][0] >= items[1][0] && items[0][1] <= items[1][1]) ||
        ((items[1][0] >= items[0][0] && items[1][1] <= items[0][1]))
      )
    })

  console.log(groups.length)
})
