const file = 'input.txt'
const fs = require('fs')

/**
 * Shapes opponent
 * A : Rock
 * B : Paper
 * C : Scissors
 * Your shapes
 * Rock : give you 1 point
 * Paper : give you 2 points
 * Scissors : give you 3 points
 * ---
 * How the round need to end
 * X : You need to lose
 * Y : You need to end in a draw
 * Z : You need to win
 * ---
 * Points
 * Win : 6
 * Draw : 3
 * Lost : 0
 */
const points = {
  'A X': 0 + 3, // Opponent use Rock, you have to lose => You use Scissors
  'A Y': 3 + 1, // Opponent use Rock, the match ends in a draw => You use Rock
  'A Z': 6 + 2, // Opponent use Rock, you have to win => You use Paper
  'B X': 0 + 1, // Opponent use Paper, you have to lose => You use Rock
  'B Y': 3 + 2, // Opponent use Paper, the match ends in a draw => You use Paper
  'B Z': 6 + 3, // Opponent use Paper, you need to win => You use Scissors
  'C X': 0 + 2, // Opponent use Scissors, you have to lose => You use Paper
  'C Y': 3 + 3, // Opponent use Scissors, the match ends in a draw => You use Scissors
  'C Z': 6 + 1 // Opponent use Scissors, you have to win => You use Rock
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
