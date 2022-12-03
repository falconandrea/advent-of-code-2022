const file = 'input.txt'
const fs = require('fs')

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const groups = []
  let counter = 0
  let temp = []
  for (const item of data.split('\n')) {
    temp.push(item)
    counter++
    if (counter === 3) {
      groups.push(temp)
      temp = []
      counter = 0
    }
  }

  const total = groups
    .map(items => items[0].split('').filter(item => items[1].split('').includes(item) && items[2].split('').includes(item)))
    .map(item => (item[0].charCodeAt() - 96 < 0) ? item[0].charCodeAt() - 38 : item[0].charCodeAt() - 96)
    .reduce((total, value) => total + value)

  console.log(total)
})
