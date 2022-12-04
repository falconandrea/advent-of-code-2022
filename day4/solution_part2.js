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
    .map(rows => rows.map(item => Array.from({ length: item[1] - item[0] + 1 }, (v, k) => k + item[0])))
    .filter(rows => rows[0].filter(x => rows[1].includes(x)).length)

  console.log(groups.length)
})
