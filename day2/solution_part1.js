const file = 'input.txt'
const fs = require('fs')

/**
 * Shapes opponent
 * A : Rock
 * B : Paper
 * C : Scissors
 * ---
 * Our shapes
 * X : Rock (give 1 point)
 * Y : Paper (give 2 points)
 * Z : Scissors (give 3 points)
 * ---
 * Points
 * Win : 6
 * Draw : 3
 * Lost : 0
 */
const points = {
  'A X': 3 + 1,
  'A Y': 6 + 2,
  'A Z': 0 + 3,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 6 + 1,
  'C Y': 0 + 2,
  'C Z': 3 + 3
}

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  }

  const total = data.split('\n').reduce((sum, value) => {
    return value ? points[value] + sum : sum
  }, 0)

  console.log(total)
})
