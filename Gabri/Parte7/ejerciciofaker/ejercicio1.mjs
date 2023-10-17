import chalk from 'chalk'
import { DateTime } from 'luxon'

const currentTime = DateTime.local()
const formattedTime = currentTime.toFormat('HH:mm:ss')

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.underline, chalk.bgBlackBright, chalk.bgCyanBright, chalk.cyan]

colors.forEach((color) => {
  console.log(color(`Hora actual : ${formattedTime}`))
})