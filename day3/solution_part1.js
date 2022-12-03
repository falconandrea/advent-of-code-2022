const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const total = data
    .split('\n')
    .filter(item => item)
    .map(item => {
      return [item.slice(0, (item.length) / 2).split(''), item.slice((item.length) / 2).split('')]
    })
    .map(row => {
      return row[0].filter(item => row[1].includes(item))
    })
    .map(item => (item[0].charCodeAt() - 96 < 0) ? item[0].charCodeAt() - 38 : item[0].charCodeAt() - 96)
    .reduce((total, value) => total + value)

  console.log(total)
})
