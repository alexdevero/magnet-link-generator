/**
 * @author Alex Devero <deveroalex@gmail.com>
 * @version 0.1
 */

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = () => {
  rl.question('Insert info hash \n', (answer) => {
    function generateMagnetLink(answer) {
      var result = 'magnet:?xt=urn:btih:'
      result += answer.toString()

      console.log(`\nYour magnet link: ${result}\n`)

      return result
    }

    generateMagnetLink(answer)

    rl.question('Do you want to generate another magnet link? (Y/N) \n', (answerTwo) => {
      if (answerTwo.toLowerCase() === 'y') {
        init()
      } else {
        rl.close()
      }
    })
  })
}

init()
